/**
 * Internal dependencies
 */
import { Ticket } from '../../../../eventEditor/data/types';
import { ShowTickets } from '../../../../eventEditor/data/ticket/types';

import archivedOnly from './archivedOnly';
import expiredOnly from './expiredOnly';
import nextOnSaleOrPendingOnly from './nextOnSaleOrPendingOnly';
import onSaleAndPending from './onSaleAndPending';
import onSaleOnly from './onSaleOnly';
import pendingOnly from './pendingOnly';
import percentSoldAtOrAbove from './percentSoldAtOrAbove';
import percentSoldBelow from './percentSoldBelow';
import soldOutOnly from './soldOutOnly';

export const now = new Date();

interface FilterTickets {
	tickets: Ticket[];
	show?: string;
}

/**
 * filterTickets
 * reduces tickets array based on value of the "show" filter
 *
 * @param {Array} tickets    original tickets array
 * @param {string} show    value for the "show" filter
 * @return {Array}         filtered tickets array
 */
const filters = ({ tickets, show = 'on-sale-and-pending' }: FilterTickets) => {
	switch (show) {
		case ShowTickets.above50Sold:
			return percentSoldAtOrAbove({ maxQuantity: 50, tickets });
		case ShowTickets.above75Sold:
			return percentSoldAtOrAbove({ maxQuantity: 75, tickets });
		case ShowTickets.above90Sold:
			return percentSoldAtOrAbove({ maxQuantity: 90, tickets });
		case ShowTickets.all:
			return tickets;
		case ShowTickets.archivedOnly:
			return archivedOnly(tickets);
		case ShowTickets.below50Sold:
			return percentSoldBelow({ maxQuantity: 50, tickets });
		case ShowTickets.expiredOnly:
			return expiredOnly(tickets);
		case ShowTickets.nextOnSaleOrPendingOnly:
			return nextOnSaleOrPendingOnly(tickets);
		case ShowTickets.onSaleAndPending:
			return onSaleAndPending(tickets);
		case ShowTickets.onSaleOnly:
			return onSaleOnly(tickets);
		case ShowTickets.pendingOnly:
			return pendingOnly(tickets);
		case ShowTickets.soldOutOnly:
			return soldOutOnly(tickets);
	}
	return tickets;
};

export default filters;
