<?php

if (!defined('EVENT_ESPRESSO_VERSION') )
	exit('NO direct script access allowed');

/**
 * Event Espresso
 *
 * Event Registration and Management Plugin for WordPress
 *
 * @ package			Event Espresso
 * @ author				Seth Shoultes
 * @ copyright		(c) 2008-2011 Event Espresso  All Rights Reserved.
 * @ license				http://eventespresso.com/support/terms-conditions/   * see Plugin Licensing *
 * @ link					http://www.eventespresso.com
 * @ version		 	4.0
 *
 * ------------------------------------------------------------------------
 *
 * EE_Payment_Declined_message_type extends EE_message_type
 *
 * Handles frontend and backend payment notification messages for declined payments
 *
 * @package		Event Espresso
 * @subpackage	includes/core/messages/message_type/EE_Payment_Declined_message_type.class.php
 * @author		Darren Ethier
 *
 * ------------------------------------------------------------------------
 */

class EE_Payment_Declined_message_type extends EE_message_type {

	public function __construct() {

		//setup type details for reference
		$this->name = 'payment_declined';
		$this->description = __('This message type is used for all declined payment notification messages that go out including any manual payments entered by an event administrator.', 'event_espresso');
		$this->label = array(
			'singular' => __('payment declined', 'event_espresso'),
			'plural' => __('payments declined', 'event_espresso')
			);

		parent::__construct();

	}


	/**
	 * see abstract declaration in parent class for details.
	 */
	protected function _set_admin_pages() {
		$this->admin_registered_pages = array(
			'events_edit' => true
			);
	}



	protected function _set_data_handler() {
		$this->_data_handler = 'Gateways';
	}



	protected function _get_data_for_context( $context, EE_Registration $registration, $id ) {

		//use the registration to get the transaction.
		$transaction = $registration->transaction();

		//bail early if no transaction
		if ( ! $transaction instanceof EE_Transaction ) {
			throw new EE_Error( __('The given registration does not have an associated transaction. Something is wrong.', 'event_espresso' ) );
		}

		$payment = ! empty( $id ) ? EEM_Payment::instance()->get_one( array( array( 'PAY_ID' => $id, 'TXN_ID' => $transaction->ID() ) ) ) : 0;

		return array( $transaction, $payment );
	}



	protected function _get_id_for_msg_url( $context, EE_Registration $registration ) {
		//there should be a transaction and payment object in the incoming data.
		if ( $this->_data instanceof EE_Messages_incoming_data  ) {
			$payment = $this->_data->payment;

			if ( $payment instanceof EE_Payment ) {
				return $payment->ID();
			}
		}
		return 0;
	}



	protected function _get_admin_content_events_edit_for_messenger( EE_Messenger $messenger ) {
		//this is just a test
		return $this->name . ' Message Type for ' . $messenger->name . ' Messenger ';
	}

	/**
	 * This message type doesn't need any settings so we are just setting to empty array.
	 */
	protected function _set_admin_settings_fields() {
		$this->_admin_settings_fields = array();
	}

	protected function _set_default_field_content() {

		$this->_default_field_content = array(
			'subject' => $this->_default_template_field_subject(),
			'content' => $this->_default_template_field_content(),
		);
		$this->_default_field_content = apply_filters( 'FHEE_default_field_content_'.$this->name, $this->_default_field_content );
	}




	protected function _default_template_field_subject() {
		foreach ( $this->_contexts as $context => $details ) {
			$content[$context] = __('Event Payment Details: Your payment was declined', 'event_espresso');
		};
		return $content;
	}

	protected function _default_template_field_content() {
		$content = file_get_contents( EE_LIBRARIES . 'messages/message_type/assets/defaults/payment-declined-message-type-content.template.php');

		foreach ( $this->_contexts as $context => $details ) {
			$tcontent[$context]['main'] = $content;
			$tcontent[$context]['event_list'] = file_get_contents( EE_LIBRARIES . 'messages/message_type/assets/defaults/payment-declined-message-type-event-list.template.php');
			$tcontent[$context]['ticket_list'] = file_get_contents( EE_LIBRARIES . 'messages/message_type/assets/defaults/payment-message-type-ticket-list.template.php');
		}

		return $tcontent;
	}

	/**
	 * _set_contexts
	 * This sets up the contexts associated with the message_type
	 *
	 * @access  protected
	 * @return  void
	 */
	protected function _set_contexts() {
		$this->_context_label = array(
			'label' => __('recipient', 'event_espresso'),
			'plural' => __('recipients', 'event_espresso'),
			'description' => __('Recipient\'s are who will receive the template.  You may want different payment details sent out depending on who the recipient is', 'event_espresso')
			);

		$this->_contexts = array(
			'admin' => array(
				'label' => __('Event Admin', 'event_espresso'),
				'description' => __('This template is what event administrators will receive when payment is declined', 'event_espresso')
				),
			'primary_attendee' => array(
				'label' => __('Primary Registrant', 'event_espresso'),
				'description' => __('This template is what the primary registrant (the person who made the main registration) will receive when the payment is declined', 'event_espresso')
				)
			);
	}


}

// end of file:	includes/core/messages/types/EE_Onsite Payment_message.class.php
