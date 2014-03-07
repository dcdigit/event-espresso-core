<?php if ( ! defined('EVENT_ESPRESSO_VERSION')) exit('No direct script access allowed');
/**
 * Event Espresso
 *
 * Event Registration and Management Plugin for WordPress
 *
 * @ package			Event Espresso
 * @ author			Seth Shoultes
 * @ copyright		(c) 2008-2011 Event Espresso  All Rights Reserved.
 * @ license			http://eventespresso.com/support/terms-conditions/   * see Plugin Licensing *
 * @ link					http://www.eventespresso.com
 * @ version		 	4.0
 *
 * ------------------------------------------------------------------------
 *
 * Mijireh slurping-related module. Coordinates with the mijireh gateway and depends on it (whereas the
 * mijireh gateway functions independently of whether this module is active).
 * When a special admin page is requested, adds a wp page for slurping, and adds
 * a metabox to that page for easy slurping.
 * Everything relating to slurping is in this file, except for some help tab content, 
 * which is contained in admin_pages/payments/help_tabs/...mijireh.help_tab.php
 *
 * @package			Event Espresso
 * @subpackage	/modules/csv/
 * @author				Brent Christensen 
 *
 * ------------------------------------------------------------------------
 */
class EED_Mijireh_Slurper  extends EED_Module {
	
	const mijireh_slurper_shortcode = '{{Espresso-Mijireh-checkout-form}}';

	/**
	 * 	set_hooks - for hooking into EE Core, other modules, etc
	 *
	 *  @access 	public
	 *  @return 	void
	 */
	public static function set_hooks() {
	}

	/**
	 * 	set_hooks_admin - for hooking into EE Admin Core, other modules, etc
	 *
	 *  @access 	public
	 *  @return 	void
	 */
	public static function set_hooks_admin() {
		add_action('add_meta_boxes',array('EED_Mijireh_Slurper','add_slurp_page_metabox'));
		add_action('add_meta_boxes',array('EED_Mijireh_Slurper','slurp_or_not'));//probably not the best hook, but it works
		add_action('admin_init',array('EED_Mijireh_Slurper','check_for_edit_slurp_page'));//alsoo not the best hook, but it works
		add_action('AHEE__EE_Mijireh__settings_end',array('EED_Mijireh_Slurper','add_slurp_link_to_gateway'));
	}

	/**
	 * Adds the slurping content to the gateway's settings page, because I thought this was best suited to remain in the module's code (because
	 * the gateway works fine independent of this module)
	 */
	public static function add_slurp_link_to_gateway(){
		EEH_Template::display_template( EE_MODULES.'mijireh_slurper/templates/additional_content_on_gateway.template.php', array() );
	}

	/**
	 * Inspects the request's querystring for a special arg indicating to forward the user onto the mijireh slurp page (we do it this way,
	 * instead of just directly putting a link to the page in the anchor tag, because the page might not exist yet, in whcih case we
	 * need to first make it). If the special arg is present, redirects the user to the slurp page's edit page
	 * @return void
	 */
	public static function check_for_edit_slurp_page(){
		if(isset($_GET['mijireh_edit_slurp_page']) && $_GET['mijireh_edit_slurp_page'] == 'true'){
			//check if we already have a slurping page
			if( ! $slurp_page_id = self::find_slurp_page() ){
				//if no slurp page yet, make one
				$slurp_page_id = wp_insert_post(
					array(
						'post_title'=>  __("Mijireh Slurping Page", 'event_espresso'),
						'post_content'=>  EED_Mijireh_Slurper::mijireh_slurper_shortcode,
						'post_type'=>'page'
					)
				);			
			}
			wp_redirect(add_query_arg(array('post'=>$slurp_page_id,'action'=>'edit'),admin_url('post.php')));
		}
	}

	/**
	 * Gets teh post id which has the {{mj-checkout-form}} "shortcode" in it, otherwise null
	 * @return int
	 */
	public static function find_slurp_page(){
		global $wpdb;
		return $wpdb->get_var("SELECT id FROM {$wpdb->posts} WHERE post_content LIKE '%".EED_Mijireh_Slurper::mijireh_slurper_shortcode."%'");
	}

	/**
	* Return true if the current page is the mijireh checkout page, otherwise return false.
	* 
	* @return boolean
	*/
	public static function is_slurp_page() {
		global $post;
		$isSlurp = false;
		if(isset($post) && is_object($post)) {
			$content = $post->post_content;
			if( strpos($content, EED_Mijireh_Slurper::mijireh_slurper_shortcode ) !== false ) {
				$isSlurp = true;
			}
		}
		else {
			// echo '[' . basename(__FILE__) . ' - line ' . __LINE__ . "] Check Slurp Page Failed: " . print_r($post, 1);
		}
		return $isSlurp;
	}

	/**
	* adds the callback to adding the slurp page metabox, which shoudl only appear on a page with the {{mj-checkout-form}} "shortcode"
	* @return void
	*/
	public static function add_slurp_page_metabox() { 
		if(self::is_slurp_page() && EEM_Gateways::instance()->get_gateway('Mijireh')){
			add_meta_box( 
				'slurp_meta_box', // $id  
				'Mijireh Page Slurp', // $title  
				array('EED_Mijireh_Slurper', 'slurp_page_metabox'), // $callback  
				'page', // $page  
				'normal', // $context  
				'high'
			); // $priority  
		}
	}

	/**
	* outputs HTML for displaying the slurping metabox
	* @param WP_Post $post
	* @return void echoes out html
	*/
	public static function slurp_page_metabox($post) {
	   global $wp;
	   $mijireh_gateway = EEM_Gateways::instance()->get_gateway('Mijireh');
	   if($mijireh_gateway){
		$settings = $mijireh_gateway->settings();
		$access_key = $settings['access_key'];
		EEH_Template::display_template(
			EE_MODULES.'mijireh_slurper/templates/mijireh_slurp_page_metabox.template.php', 
			 array(
				 'mijireh_image_url'=>EE_GATEWAYS_URL.'Mijireh/lib/mijireh-checkout-logo.png',
				 'access_key'=>$access_key,
				 'slurp_action_link'=> add_query_arg('mijireh_slurp_now','true',add_query_arg( $wp->query_string, '',  '?'.$_SERVER['QUERY_STRING'] ))
			 )
		 );
	   }
	}

	/**
	* decides whether to slurp the post indicated by teh $post global or not, based entirely
	* on a special arg being in the querystring
	* @return void
	*/
	public static function slurp_or_not(){
	  //check if this page has the right mijire 'shortcode' and if they've specified to slurp it
	  if(isset($_GET['mijireh_slurp_now']) && $_GET['mijireh_slurp_now'] == 'true' && EED_Mijireh_Slurper::is_slurp_page()){
		  EED_Mijireh_Slurper::slurp_now();
	  }
	}

	/**
	* Sends a request to mijireh to slurp the current $post, and then redirects the user back to the current page without the
	* special querystring arg indicating to slurp. Also, should temporarily make teh current post published, then revert it to its previous status
	*/
	public static function slurp_now(){
		global $post;
		if ( $post->post_status != 'publish' ) {
			//make sure the post is published at least while slurping
			$post->post_status = 'publish';
			wp_update_post($post);
		}
		$mijireh_gateway = EEM_Gateways::instance()->get_gateway('Mijireh');
		$mijireh_settings = $mijireh_gateway->settings();
		// $return_url = add_query_arg( $wp->query_string, '', home_url( $wp->request ) );
		// 'mijireh_url'=>'https://secure.mijireh.com/api/1/slurps',
		$access_key = $mijireh_settings['access_key'];
		// 'slurp_url'=>get_permalink($post),
		// 'page_id'=>$post->ID,
		// 'return_url'=>$return_url
		$url = 'https://secure.mijireh.com/api/1/slurps';
		$args = array(
		  	'headers' => array(
				'Authorization' => 'Basic ' . base64_encode( $access_key . ':' ),
				'Accept'=>'application/json'
			),
			'body'=>json_encode(
				array(
					'url'=>  get_permalink($post->ID),
					'page_id'=>$post->ID,
					'return_url'=>''
				)
			)
		);
		$response = wp_remote_post($url,$args);
		//now redirect the user back to the same page
		$redirect_args = $_GET;
		unset($redirect_args['mijireh_slurp_now']);
		$url = add_query_arg($redirect_args,admin_url('post.php'));
		// echo "redirect to $url";
		wp_redirect($url);
	}

	/**
	 * 	run - initial module setup
	 *
	 *  @access 	public
	 *  @return 	void
	 */
	public function run( $WP ) {
	}

}
// End of file EED_Mijireh_Slurper.module.php
// Location: /modules/csv/EED_Csv.module.php