import { price, userData } from '../userData';
import { choose } from './refs';

export function changePrice(event) {
	const selected = event.target.parentElement.classList[0];
	const section = choose(`#${userData.tab}`);
	const priceElem = Array.from(section.querySelectorAll('[data-price]'));

	if (selected === 'second') {
		userData.priceX = 2;
		priceElem.forEach(elem => {
			elem.textContent = elem.textContent * 2;
		});
	}

	if (selected === 'first') {
		userData.priceX = 1;
		priceElem.forEach(elem => {
			elem.textContent = price[elem.dataset.price];
		});
	}
}
