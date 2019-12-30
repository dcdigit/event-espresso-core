/**
 * External dependencies
 */
import { useReducer, useEffect } from 'react';

/**
 * Internal dependencies
 */
import filters from '../../../../../shared/predicates/tickets/filters';

enum ActionType {
	SET_DISPLAY_TICKET_DATE = 'SET_DISPLAY_TICKET_DATE',
	SET_SHOW_TICKETS = 'SET_SHOW_TICKETS',
	SET_TICKETS_SORTED_BY = 'SET_TICKETS_SORTED_BY',
	TOGGLE_IS_CHAINED = 'TOGGLE_IS_CHAINED',
}

const useTicketListFilterState = () => {
	const initialState = {
		displayTicketDate: 'start',
		isChained: false,
		showTickets: 'all',
		ticketsSortedBy: 'chronologically',
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		console.log('useTicketListFilterState >>>', state);
	}, [state]);

	const setDisplayTicketDate = (displayTicketDate) => {
		dispatch({
			type: ActionType.SET_DISPLAY_TICKET_DATE,
			displayTicketDate,
		});
	};

	const setShowTickets = (showTickets) => {
		dispatch({
			type: ActionType.SET_SHOW_TICKETS,
			showTickets,
		});
	};

	const setTicketsSortedBy = (ticketsSortedBy) => {
		dispatch({
			ticketsSortedBy,
			type: ActionType.SET_TICKETS_SORTED_BY,
		});
	};

	const toggleIsChained = () => {
		dispatch({
			type: ActionType.TOGGLE_IS_CHAINED,
		});
	};

	return {
		...state,
		setDisplayTicketDate,
		setShowTickets,
		setTicketsSortedBy,
		toggleIsChained,
	};
};

interface Action {
	type: ActionType;
}

const reducer = (state, action) => {
	const { displayTicketDate, showTickets, ticketsSortedBy } = action;
	let processedDates = [];

	switch (action.type) {
		case ActionType.SET_DISPLAY_TICKET_DATE:
			return { ...state, displayTicketDate };
		case ActionType.SET_SHOW_TICKETS:
			processedDates = filters({ tickets: state.tickets, show: showTickets });

			return { ...state, processedDates, showTickets };
		case ActionType.SET_TICKETS_SORTED_BY:
			return { ...state, ticketsSortedBy };
		case ActionType.TOGGLE_IS_CHAINED:
			return { ...state, isChained: !state.isChained };

		default:
			throw new Error('Unexpected action');
	}
};

export default useTicketListFilterState;
