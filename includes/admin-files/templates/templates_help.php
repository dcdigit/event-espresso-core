<div style="display: none;">
	<?php
    	/**
    	 * Enable Built In Styles Help Box
    	 */
    ?>
	<div id="enable_styles_info" class="pop-help" >
		<div class="TB-ee-frame">
			<h2>
				<?php _e('Enable Built In Styles', 'event_espresso'); ?>
			</h2>
			<p>
				<?php _e('Enabling Styles tells Event Espresso to use it\'s built in stylesheets for styling the template files.', 'event_espresso'); ?>
			</p>
			<p>
				<?php _e('If this option is enabled Event Espresso first looks in the /wp-content/uploads/espresso/templates folder for a copy of the stylesheet, if not found it then uses the copy found in the main templates folder.', 'event_espresso'); ?>
			</p>
			<p>
				<?php _e('If event espresso uses the original copy of the stylesheet you will have the option to select from a range of alternative sheets, these additional stylesheets however are not available if you have copied the default stylesheet to the uploads folder to customize yourself.', 'event_espresso'); ?>
			</p>
			<p> <em class="important"> <strong>
				<?php _e('ATTENTION:', 'event_espresso'); ?>
				</strong><br />
				<?php _e('If you want to modify and customize the styles of your template pages you must move a copy of the event_espresso_style.css to the /wp-content/uploads/espresso/templates folder (if /espresso/templates does not exist you may need to create it manually. Keeping your modification in this folder ensures that your styles are not overwritten when upgrading EE.) ', 'event_espresso'); ?>
				</em> </p>
		</div>
	</div>
	<?php
		/**
		 * Select Alternative stylesheets Help Box
		 */
	?>
	<div id="alternative_styles_info" class="pop-help" >
		<div class="TB-ee-frame">
			<h2>
				<?php _e('Default Event Espresso Style Settings', 'event_espresso'); ?>
			</h2>
			<?php if($disabled) : ?>
			<em class="important">
			<?php _e('You currently either have <i>Enable Built in style sheets</i> disabled or have a copy of the default espresso stylesheet copied to your uploads folder, and the alternative stylesheets selections are therefore disabled.', 'event_espresso'); ?>
			</em>
			<?php endif; ?>
			<p>
				<?php _e('These two drop down options provide a choice of stylesheets with various stylings.', 'event_espresso'); ?>
			</p>
			<p>
				<?php _e('These options are available as long as you have not copied the main stylesheet <i>event_espresso_style.css</i> to the uploads folder to customize yourself.', 'event_espresso'); ?>
			</p>
			<p>
				<?php _e('By default the general espresso stylesheet will be loaded if you have selected <i>Yes</i> in the <i>Enable built in style sheets</i> option, You may then choose to select from one of the alternative base stylesheets along with an optional sheet to select a color scheme.', 'event_espresso'); ?>
			</p>
			<p>
				<?php _e('These selections replace the deafault espresso stylesheet and offer enhanced styling for your event pages details', 'events_espreso') ?>
			</p>
		</div>
	</div>
	<?php
		/**
		 * Custom Templates Help Box
		 */
	?>
	<div id="custom_templates_info" class="pop-help" >
		<div class="TB-ee-frame">
			<h2>
				<?php _e('Custom Templates', 'event_espresso'); ?>
			</h2>
			<p>
				<?php _e('Sometimes these files will cause problems when Event Espresso has been updated. If you have moved these files and having problems, you can disable this feature to load the default files.', 'event_espresso'); ?>
			</p>
			
		</div>
	</div>
	<?php
		/**
		 * ThemeRoller Style Settings Help Box
		 */
	?>
	<div id="themeroller_info" class="pop-help" >
		<div class="TB-ee-frame">
			<h2>
				<?php _e('ThemeRoller Style Settings ', 'event_espresso'); ?>
			</h2>
			<p>
			<?php _e('Event Espresso uses the <a href="http://themeroller.com/" target="_blank">jQuery UI ThemeRoller</a> CSS library to style the event listings and registration pages. The ThemeRoller CSS library makes it easy to get the desired look and feel for your events and calendar. If the built-in style are activated, Event Espresso will automatically load the "themeroller-base.css" style sheet which applies the necessary padding and margins to the Event Espresso generated content.', 'event_espresso'); ?>
			</p>
			<p><strong><?php _e('Adding Custom ThemeRoller Styles', 'event_espresso'); ?></strong><br />
			<?php _e('To add your own custom ThemeRoller styles: ', 'event_espresso'); ?>
			</p>
			<ol>
			<li><?php _e('Go to the <a href="http://themeroller.com/" target="_blank">jQuery UI ThemeRoller</a> site and design and download your custom style.', 'event_espresso'); ?></li> 
			<li><?php _e('Unzip the downloaded file, then navigate to the "/css/" folder. Inside you will see a folder named "custom-theme" (or the name of the theme if you selected a pre-made style). If you like, rename the "custom-theme" folder to something memorable.', 'event_espresso'); ?></li>
			<li><?php _e('This step is very important. Inside the "custom-theme" folder, find a file named "jquery-ui-*.*.**.custom.css". Rename that file to "style.css". If you do not rename this file, you will not see your custom theme in the selections.', 'event_espresso'); ?></li>
			<li><?php _e('Upload your desired ThemeRoller styles to the "wp-content/uploads/espresso/themeroller/" folder on your server.', 'event_espresso'); ?></li>
			<li><?php _e('This step is very important. Create an empty "index.php" file in the "wp-content/uploads/espresso/themeroller/" folder. This will tell Event Espresso that you want to use custom ThemeRoller CSS files.', 'event_espresso'); ?></li>
			<li><strong><?php _e('IMPORTANT:', 'event_espresso'); ?></strong> <?php _e('Verify you have an "wp-content/uploads/espresso/themeroller/index.php" file. Verify you have uploaded your custom ThemeRoller CSS files files"wp-content/uploads/espresso/themeroller/custom-theme/style.css"', 'event_espresso'); ?> </li>
			</ol>
			
			<p>
				<strong><?php _e('About ThemeRoller', 'event_espresso'); ?></strong>
				<br />
				<?php _e('ThemeRoller is a web app that offers a fun and intuitive interface for designing and downloading custom themes for jQuery UI. You can find ThemeRoller in the "Themes" section of the jQuery UI site, or by following this link: <a href="http://themeroller.com/" target="_blank">jQuery UI ThemeRoller</a>', 'event_espresso'); ?>
			</p>
		</div>
	</div>
	<?php
		/**
		 * Configuring the Google maps options Help Box
		 */
	?>
	<div id="gmaps_info" class="pop-help" >
		<div class="TB-ee-frame" style="height:500px; overflow-y: scroll;">
			<h2>
				<?php _e('Configuring the Google maps options', 'event_espresso'); ?>
			</h2>
			<p>
				<?php _e('The map options allow you to configure how your event map is displayed. You may configure your events lists and event registration pages independently, so, for example, on a registration page you could set a much larger overall size.', 'event_espresso'); ?>
			</p>
			<p>
				<?php _e('For an event to display a Gmap you must have enabled it to on the event edit or create event pages in the venue box. This allows you to select which events you would like to display with a map.', 'event_espresso'); ?>
			</p>
			<p>
				<?php _e('Below is a brief explanation of the options available.', 'events_espreso') ?>
			</p>
			<ul>
				<li> <strong>
					<?php _e('Set Map Width', 'event_espresso') ?>
					</strong><br />
					<?php _e('You may set a pixel width for your map, this is set as a simple numeric value and should not contain any other charecters - if a value is not set default ones are used, for list events the maps are set to 200px, for registration page single maps 500px. ', 'event_espresso'); ?>
				</li>
				<li> <strong>
					<?php _e('Set Map Height', 'event_espresso') ?>
					</strong><br />
					<?php _e('The same as setting the width above but for the map height - maps work best set to equal values i.e square dimensions.', 'event_espresso'); ?>
				</li>
				<li> <strong>
					<?php _e('Set Map Zoom level: Range: 1 - 19', 'event_espresso') ?>
					</strong><br />
					<?php _e('Zoom level is the level of detail that is shown when the map first renders a low value means you zoom out and see a wider area, a higher value means that you zoom in and see the actual address in finer detail, a default value of 12 is set as a good base value.', 'event_espresso'); ?>
				</li>
				<li> <strong>
					<?php _e('Set Map Navigation Overlay', 'event_espresso') ?>
					</strong><br />
					<?php _e('The navigation overlay are the controls for panning and zooming the map.', 'event_espresso'); ?>
				</li>
				<li> <strong>
					<?php _e('Keep Map Navigation Small', 'event_espresso') ?>
					</strong><br />
					<?php _e('Keep map navigation small tells google to only load the smaller map overlay regardless of map size - Google changes various options according to the size of a map, if you want to stop this happening you can set this option to yes.', 'event_espresso'); ?>
				</li>
				<li> <strong>
					<?php _e('Set Map Type Control', 'event_espresso') ?>
					</strong><br />
					<?php _e('The map type control is the options bar google sets in the top right corner this can take the form of a dropdown or horizontal bar.', 'event_espresso'); ?>
				</li>
				<li> <strong>
					<?php _e('Set Map Alignment', 'event_espresso') ?>
					</strong><br />
					<?php _e('Alignment alows you to move the map left, center, or right within whatever parent event structure you have, please note though this option is dependent on your themes layout as to whether it will work as expected. The default alignment is to the left.', 'event_espresso'); ?>
				</li>
				<li> <strong>
					<?php _e('Use map in template files ( No Shortcodes)', 'event_espresso') ?>
					</strong><br />
					<?php _e('Select this option to enable your event map in the template file - this option is used if you are not using venue shortcodes and want map display activated in either event list pages or registration pages.', 'event_espresso') ?>
				</li>
			</ul>
		</div>
	</div>
</div>
