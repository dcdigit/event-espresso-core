jQuery(document).ready(function($) {

	// disable state dropdown if adding a new state
	$('.ee-form-add-new-state-submit').click(function(e) {
		// get STATE ABBREV input id from "this" (the control element's) "rel" attribute
		var new_state_rel = $(this).attr("rel");
		// create id for new STATE NAME input
		var new_state_name_id = new_state_rel.replace('new_state', 'new_state_name');
		// create id for new STATE NAME input
		var new_state_abbrv_id = new_state_rel.replace('new_state', 'new_state_abbrv');
		// create id for new state COUNTRY input
		var new_state_country_id = new_state_rel.replace('new_state', 'new_state_country');
		// COUNTRY DETAILS
		var  new_state_country_iso = $('#'+new_state_country_id).children(':selected').val();
		var  new_state_country_name = $('#'+new_state_country_id).children(':selected').text();
		var new_state_name = $('#'+new_state_name_id).val();
		var new_state_abbrv = $('#'+new_state_abbrv_id).val();

		if ( espresso_validate_new_state_data( new_state_country_iso, new_state_name, new_state_abbrv )) {
			// submit data via AJAX for db insertion
			espresso_save_new_state_to_db( new_state_country_iso, new_state_name, new_state_abbrv, new_state_rel );	
		}	
		e.preventDefault();
		e.stopPropagation();
	});



	function espresso_validate_new_state_data( state_country_iso, state_name, state_abbrv ) {	
		if ( state_country_iso == undefined || state_country_iso == '' ) {
			display_espresso_ajax_notices( 'In order to proceed, you need to select the Country that your State/Province belongs to.' );
			return false;
		}
		if ( state_name == undefined || state_name == '' ) {
			display_espresso_ajax_notices( 'In order to proceed, you need to enter the name of your State/Province.' );
			return false;
		}
		if ( state_abbrv == undefined || state_abbrv == '' ) {
			display_espresso_ajax_notices( 'In order to proceed, you need to enter an abbreviation for the name of your State/Province.' );
			return false;
		}
		//alert( 'state_country_iso = ' + state_country_iso + '\n' + 'state_name = ' + state_name + '\n' + 'state_abbrv = ' + state_abbrv );
		return true;
	}
		
	

	function espresso_save_new_state_to_db( state_country_iso, state_name, state_abbrv, new_state_rel ) {
		
		if ( ! espresso_validate_new_state_data( state_country_iso, state_name, state_abbrv )) {
			return false;
		}
//		alert( 'state_country_iso = ' + state_country_iso + '\n' + 'state_name = ' + state_name + '\n' + 'state_abbrv = ' + state_abbrv + '\n' + 'new_state_rel = ' + new_state_rel );
		
		$.ajax({
			type: "POST",
			url:  eei18n.ajax_url,
			dataType: "json",
			data: {
				action : 'espresso_add_new_state',
				ee_front_ajax: 1, 
				add_new_state: 1, 
				new_state_country: state_country_iso,
				new_state_name: state_name,
				new_state_abbrv: state_abbrv,
				noheader : 'true'				
			},
			
			beforeSend: function() {
				$('#espresso-ajax-loading').show();
			},
			
			success: function( response ){
				
				$('#espresso-ajax-loading').fadeOut('fast');
				 if ( response.success != undefined && response.success == true ) {
					display_espresso_ajax_notices( 'The new state was successfully saved to the database.', 'success' );
					console.log( JSON.stringify( 'response: ' + response, null, 4 ));
					espresso_process_new_state( response, new_state_rel );
				} else if ( response.error !== undefined && response.error != '' ) {
					display_espresso_ajax_notices( response.error );
				} else {
					display_espresso_ajax_notices( 'An unknown error has occured on the server while saving the new state to the database.' );
				}
						
			},
			
			error: function( response ) {
				$('#espresso-ajax-loading').fadeOut('fast');
				display_espresso_ajax_notices( 'An unknown error has occured on the server while saving the new state to the database.' );
			}
					
		});
	}

	
		
	

	function espresso_process_new_state( new_state, new_state_rel ) {	
		if ( new_state.success != undefined && new_state.success == true ) {
			// TARGET INPUTS
			var state_select_id  = new_state_rel.replace('new_state', 'state');
			var state_select_dv = state_select_id +'-dv';
			var country_select_id = new_state_rel.replace('new_state', 'country'); 

			// find all inputs with country in the ID
			$("#single-page-checkout select[id*='-country']").each( function() {
				var country_select_id_to_set = $(this).attr('id');
				var set_selected = country_select_id_to_set == country_select_id ? true : false;
//				alert( 'country id = ' + $(this).attr('id') + '\n' + 'country_select_id = ' + country_select_id + '\n' + 'set_selected = ' + set_selected );
				// if country option already exists in Country dropdown
				if( $(this).find('option[value="' + new_state.country_iso + '"]').size() > 0 && set_selected ) {
					$('#'+country_select_id).find(':selected').prop('selected', false);
					$('#'+country_select_id + ' option[value="' + new_state.country_iso + '"]').prop('selected', true);
				} else {
					espresso_add_option_to_dropdown( country_select_id_to_set, new_state.country_iso, new_state.country_name, true );
				}
			});
			// find all inputs with state in the ID
			$("#single-page-checkout select[id*='-state']").each( function() {
				var select_id = $(this).attr('id');
				var set_selected = $(this).attr('id') == state_select_id ? true : false;
//				 alert( 'select_id = ' + select_id + '\n' + 'state_select_id = ' + state_select_id + '\n' + 'set_selected = ' + set_selected );
				// set target select's value to this input's value
				espresso_add_option_to_dropdown( select_id, new_state.id, new_state.name, set_selected, new_state.country_name );		
			});
			// set target select's value to this input's value
	//		espresso_add_option_to_dropdown( state_select_id, '', new_state_name,  );
			
			var add_new_state = new_state_rel.replace('new_state', 'add_new_state');
			$('#'+add_new_state).val('1');
			// hide the target's div container - use slideToggle or addClass
			$('#'+state_select_dv).slideToggle(250, function() {
				var display_lnk = new_state_rel.replace('new_state', 'state');
				// display the control element that toggles display of this element
				$('#display-'+display_lnk).show().fadeIn(50);
			});					
		}	
	}
	
		
	

	function espresso_add_option_to_dropdown( target_id, new_value, new_text, set_selected, opt_group ) {	
//		console.log( JSON.stringify( '198) target_id: ' + target_id, null, 4 )); 
		new_text = new_text != undefined && new_text != '' ? new_text : new_value;
//		console.log( JSON.stringify( '200) new_text: ' + new_text, null, 4 ));
		new_value = new_value != undefined && new_value != '' ? new_value : new_text;
//		console.log( JSON.stringify( '202) new_value: ' + new_value, null, 4 ));
		opt_group = opt_group != undefined && opt_group != '' ? opt_group : '';
//		console.log( JSON.stringify( '204) opt_group: ' + opt_group, null, 4 ));
		
		if ( opt_group != '' ) {
			if ( $( '#' + target_id + " optgroup[label='" + opt_group + "']" ).size() == 0 ) {
				$( '#' + target_id ).find('option[value=""]').after( '<optgroup label="' + opt_group + '"></optgroup>' );
			} 
			$( '#' + target_id + " optgroup[label='" + opt_group + "']" ).prepend( '<option value="' + new_value + '">' + new_text + '</option>');
//			console.log( JSON.stringify( '211) add opt_group', null, 4 ));
			
		} else {
			$( '#' + target_id ).find('option[value=""]').after( '<option value="' + new_value + '">' + new_text + '</option>');
//			console.log( JSON.stringify(  '215) NO opt_group', null, 4 ));
		}
		
		if ( set_selected === true ) {
//			console.log( JSON.stringify( '219) set_selected: ' + set_selected, null, 4 ));
			$( '#' + target_id ).children(':selected').prop('selected', false);
//			console.log( JSON.stringify( '221) target_id: ' + target_id, null, 4 ));
			$( '#' + target_id ).val( new_value );
//			console.log( JSON.stringify( '223) new_value: ' + $( '#' + target_id ).val( new_value ), null, 4 ));
			$( '#' + target_id  + ' option[value="' + new_value + '"]').prop('selected', true)		
//			console.log( JSON.stringify( '225) option[value: ' + true, null, 4 ));
		}
	}
		
	

	// disable state dropdown if adding a new state
	$('.ee-form-cancel-new-state-lnk').click(function(e) {
		// get target element from "this" (the control element's) "rel" attribute
		var item_to_cancel = $(this).attr("rel");
		var item_to_hide = item_to_cancel.replace('new_state', 'state');
		// hide the target's div container - use slideToggle or addClass
		$('#'+item_to_hide+'-dv').slideToggle(250, function() {
			// display the control element that toggles display of this element
			$('#display-'+item_to_hide).show().fadeIn(50);
			// set target element's value to an empty string
			$('#'+item_to_cancel).val('');
		});

		e.preventDefault();
		e.stopPropagation();
		
	});



	function display_espresso_ajax_notices( message, type ) {
		type = type !== undefined && type !== '' ? type : 'error';
		var notice_id = '#espresso-ajax-notices-' + type;
		$( notice_id + ' .espresso-notices-msg' ).text( message );
		$( '#espresso-ajax-notices' ).center();
		$( notice_id ).slideDown('fast');
		$('.espresso-ajax-notices.fade-away').delay(10000).slideUp('fast');
	}

	
	
		
});