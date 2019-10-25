<?php

namespace EventEspresso\core\domain\services\graphql\types;

use EEM_Datetime;
use EventEspresso\core\services\graphql\fields\GraphQLFieldInterface;
use EventEspresso\core\services\graphql\types\TypeBase;
use EventEspresso\core\services\graphql\fields\GraphQLField;
use EventEspresso\core\services\graphql\fields\GraphQLInputField;
use EventEspresso\core\services\graphql\fields\GraphQLOutputField;
use EventEspresso\core\domain\services\graphql\mutators\DatetimeCreate;
use EventEspresso\core\domain\services\graphql\mutators\DatetimeDelete;
use EventEspresso\core\domain\services\graphql\mutators\DatetimeUpdate;
use InvalidArgumentException;
use ReflectionException;

/**
 * Class EventDate
 * Description
 *
 * @package EventEspresso\core\domain\services\graphql\types
 * @author  Brent Christensen
 * @since   $VID:$
 */
class Datetime extends TypeBase
{

    /**
     * EventDate constructor.
     *
     * @param EEM_Datetime $datetime_model
     */
    public function __construct(EEM_Datetime $datetime_model)
    {
        $this->model = $datetime_model;
        $this->setName('Datetime');
        $this->setDescription(__('An event date', 'event_espresso'));
        $this->setIsCustomPostType(false);
        parent::__construct();
    }


    /**
     * @return \EventEspresso\core\services\graphql\fields\GraphQLFieldInterface[]
     * @since $VID:$
     */
    public function getFields()
    {
        return [
            new GraphQLField(
                'id',
                ['non_null' => 'Int'],
                'ID',
                __('The datetime ID.', 'event_espresso')
            ),
            new GraphQLField(
                'name',
                'String',
                'name',
                __('Datetime Name', 'event_espresso')
            ),
            new GraphQLField(
                'description',
                'String',
                'description',
                __('Description for Datetime', 'event_espresso')
            ),
            new GraphQLField(
                'start',
                'String',
                'start',
                __('Start timestamp of Event', 'event_espresso')
            ),
            new GraphQLField(
                'startDate',
                'String',
                'start_date',
                __('Start time/date of Event', 'event_espresso')
            ),
            new GraphQLField(
                'end',
                'String',
                'end',
                __('End timestamp of Event', 'event_espresso')
            ),
            new GraphQLField(
                'endDate',
                'String',
                'end_date',
                __('End time/date of Event', 'event_espresso')
            ),
            new GraphQLField(
                'startTime',
                'String',
                'start_time',
                __('Start time of Event', 'event_espresso')
            ),
            new GraphQLField(
                'endTime',
                'String',
                'end_time',
                __('End time of Event', 'event_espresso')
            ),
            new GraphQLField(
                'capacity',
                'Int',
                'reg_limit',
                __('Registration Limit for this time', 'event_espresso'),
                [$this, 'parseInfiniteValue']
            ),
            new GraphQLField(
                'sold',
                'Int',
                'sold',
                __('How many sales for this Datetime that have occurred', 'event_espresso')
            ),
            new GraphQLField(
                'reserved',
                'Int',
                'reserved',
                __('Quantity of tickets reserved, but not yet fully purchased', 'event_espresso')
            ),
            new GraphQLField(
                'order',
                'Int',
                'order',
                __('The order in which the Datetime is displayed', 'event_espresso')
            ),
            new GraphQLField(
                'length',
                'Int',
                'length',
                __('The length of the event (start to end time) in seconds', 'event_espresso')
            ),
            new GraphQLOutputField(
                'parent',
                'Datetime',
                null,
                __('The parent datetime of the current datetime', 'event_espresso')
            ),
            new GraphQLInputField(
                'parent',
                'Int',
                null,
                __('The parent datetime ID', 'event_espresso')
            ),
            new GraphQLField(
                'isPrimary',
                'Boolean',
                'is_primary',
                __('Flag indicating datetime is primary one for event', 'event_espresso')
            ),
            new GraphQLField(
                'isSoldOut',
                'Boolean',
                'sold_out',
                __('Flag indicating whether the tickets sold for this datetime, met or exceed the registration limit',
                    'event_espresso')
            ),
            new GraphQLField(
                'isUpcoming',
                'Boolean',
                'is_upcoming',
                __('Whether the date is upcoming', 'event_espresso')
            ),
            new GraphQLField(
                'isActive',
                'Boolean',
                'is_active',
                __('Flag indicating datetime is active', 'event_espresso')
            ),
            new GraphQLField(
                'isExpired',
                'Boolean',
                'is_expired',
                __('Flag indicating datetime is expired or not', 'event_espresso')
            ),
            new GraphQLOutputField(
                'event',
                'Event',
                null,
                __('Event of the datetime.', 'event_espresso')
            ),
            new GraphQLInputField(
                'event',
                'Int',
                null,
                __('Event ID of the datetime.', 'event_espresso')
            ),
        ];
    }


    /**
     * @param array $inputFields The mutation input fields.
     *
     * @throws InvalidArgumentException
     * @throws ReflectionException
     * @since $VID:$
     */
    public function registerMutations(array $inputFields)
    {
        // Register mutation to update an entity.
        register_graphql_mutation(
			'update' . $this->name(),
			[
				'inputFields'         => $inputFields,
				'outputFields'        => [
                    lcfirst($this->name()) => [
                        'type'    => $this->name(),
                        'resolve' => [$this, 'resolveFromPayload'],
                    ],
                ],
				'mutateAndGetPayload' => DatetimeUpdate::mutateAndGetPayload($this->model, $this),
			]
        );
        // Register mutation to delete an entity.
        register_graphql_mutation(
			'delete' . $this->name(),
			[
				'inputFields'         => [
                    'id'                => $inputFields['id'],
                    'deletePermanently' => [
                        'type'        => 'Boolean',
                        'description' => __( 'Whether to delete the entity permanently.', 'event_espresso' ),
                    ],
                ],
				'outputFields'        => [
                    lcfirst($this->name()) => [
                        'type'        => $this->name(),
                        'description' => __( 'The object before it was deleted', 'event_espresso' ),
                        'resolve'     => function ( $payload ) {
                            $deleted = (object) $payload['deleted'];
        
                            return ! empty( $deleted ) ? $deleted : null;
                        },
                    ],
                ],
				'mutateAndGetPayload' => DatetimeDelete::mutateAndGetPayload($this->model, $this),
			]
        );

        // remove primary key from input.
        unset($inputFields['id']);
        // Register mutation to update an entity.
        register_graphql_mutation(
			'create' . $this->name(),
			[
				'inputFields'         => $inputFields,
				'outputFields'        => [
                    lcfirst($this->name()) => [
                        'type'    => $this->name(),
                        'resolve' => [$this, 'resolveFromPayload'],
                    ],
                ],
				'mutateAndGetPayload' => DatetimeCreate::mutateAndGetPayload($this->model, $this),
			]
		);
    }
}