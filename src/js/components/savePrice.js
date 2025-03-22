import { price, userData } from '../userData';
import { choose } from './refs';

export function savePrice() {
	const section = choose(`#${userData.tab}`);

	Array.from(section.querySelectorAll('[data-price]')).forEach(
		elem => (price[elem.dataset.price] = elem.textContent)
	);
}
