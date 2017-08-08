<?php

defined('EVENT_ESPRESSO_VERSION') || exit('No direct script access allowed');


/**
 * Class EE_Register_Payment_Method
 *
 * EEI_Plugin_API class for registering payment methods for use with EE core.
 * Receives an array of module details and takes care of adding all of the necessary hooks and filters to integrate
 * with EE core
 *
 * @package               Event Espresso
 * @subpackage            plugin api
 * @since                 4.5.0
 * @author                Mike Nelson
 */
class EE_Register_Payment_Method implements EEI_Plugin_API
{

    /**
     * Holds values for registered payment methods
     *
     * @var array
     */
    protected static $_settings = array();



    /**
     * Method for registering new EE_PMT_Base children
     *
     * @since    4.5.0
     * @param string  $payment_method_id    a unique identifier for this set of modules Required.
     * @param  array  $setup_args           an array of arguments provided for registering modules Required.{
     * @type string[] $payment_method_paths each element is the folder containing the EE_PMT_Base child class
     *                                      (eg, 'public_html/wp-content/plugins/my_plugin/Payomatic/' which contains
     *                                      the files EE_PMT_Payomatic.pm.php)
     *                                      }
     * @throws EE_Error
     * @type array payment_method_paths    an array of full server paths to folders containing any EE_PMT_Base
     *                                      children, or to the EED_Module files themselves
     * @return void
     * @throws DomainException
     */
    public static function register($payment_method_id = null, $setup_args = array())
    {
        //required fields MUST be present, so let's make sure they are.
        if (empty($payment_method_id) || ! is_array($setup_args) || empty($setup_args['payment_method_paths'])) {
            throw new EE_Error(
                esc_html__(
                    'In order to register Payment Methods with EE_Register_Payment_Method::register(), you must include a "payment_method_id" (a unique identifier for this set of modules), and an array containing the following keys: "payment_method_paths" (an array of full server paths to folders that contain modules, or to the module files themselves)',
                    'event_espresso'
                )
            );
        }
        //make sure we don't register twice
        if (isset(self::$_settings[$payment_method_id])) {
            return;
        }
        //make sure this was called in the right place!
        if (
            ! did_action('AHEE__EE_System__load_espresso_addons')
            || did_action('AHEE__EE_System__register_shortcodes_modules_and_widgets')
        ) {
            EE_Error::doing_it_wrong(
                __METHOD__,
                esc_html__(
                    'An attempt to register modules has failed because it was not registered at the correct time.  Please use the "AHEE__EE_System__register_shortcodes_modules_and_widgets" hook to register modules.',
                    'event_espresso'
                ),
                '4.3.0'
            );
        }
        //setup $_settings array from incoming values.
        self::$_settings[$payment_method_id] = array(
            // array of full server paths to any EE_PMT_Base children used
            'payment_method_paths' => isset($setup_args['payment_method_paths'])
                ? (array)$setup_args['payment_method_paths']
                : array(),
        );
        // add to list of modules to be registered
        add_filter(
            'FHEE__EE_Payment_Method_Manager__register_payment_methods__payment_methods_to_register',
            array('EE_Register_Payment_Method', 'add_payment_methods')
        );
        // If EE_Payment_Method_Manager::register_payment_methods has already been called,
        // then we need to add our caps for this payment method manually
        if (did_action('FHEE__EE_Payment_Method_Manager__register_payment_methods__registered_payment_methods')) {
            // register payment methods directly
            foreach (self::$_settings[$payment_method_id]['payment_method_paths'] as $payment_method_path) {
                EE_Payment_Method_Manager::instance()->register_payment_method($payment_method_path);
            }
            EE_Capabilities::instance()->addCaps(
                self::getPaymentMethodCapabilities(self::$_settings[$payment_method_id])
            );
        }
    }



    /**
     * Filters the list of payment methods to add ours.
     * and they're just full filepaths to FOLDERS containing a payment method class file. Eg.
     *
     * @param array $payment_method_folders array of paths to all payment methods that require registering
     * @return array
     */
    public static function add_payment_methods($payment_method_folders)
    {
        foreach (self::$_settings as $settings) {
            foreach ($settings['payment_method_paths'] as $payment_method_path) {
                $payment_method_folders[] = $payment_method_path;
            }
        }
        return $payment_method_folders;
    }



    /**
     * This deregisters a module that was previously registered with a specific $module_id.
     *
     * @since    4.3.0
     *
     * @param string $module_id the name for the module that was previously registered
     * @return void
     * @throws DomainException
     * @throws EE_Error
     */
    public static function deregister($module_id = null)
    {
        if (isset(self::$_settings[$module_id])) {
            EE_Capabilities::instance()->removeCaps(
                self::getPaymentMethodCapabilities(self::$_settings[$module_id])
            );
            unset(self::$_settings[$module_id]);
        }
    }



    /**
     * returns an array of the caps that get added when a Payment Method is registered
     *
     * @param array $settings
     * @return array
     * @throws DomainException
     * @throws EE_Error
     */
    private static function getPaymentMethodCapabilities(array $settings)
    {
        $payment_method_caps = array('administrator' => array());
        if (isset($settings['payment_method_paths'])) {
            foreach ($settings['payment_method_paths'] as $payment_method_path) {
                $payment_method_caps = EE_Payment_Method_Manager::instance()->addPaymentMethodCap(
                    strtolower(basename($payment_method_path)),
                    $payment_method_caps
                );
            }
        }
        return $payment_method_caps;
    }

}
// End of file EE_Register_Payment_Method.lib.php
// Location: /core/libraries/plugin_api/EE_Register_Payment_Method.lib.php
