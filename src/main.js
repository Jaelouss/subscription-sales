import { switchContent } from './js/switchContent.js';
import { scrollToSection } from './js/components/scrollToSection.js';
import { formData } from './js/forms';
import './main.scss';
import refs, { choose, chooseAll } from './js/components/refs.js';
import { closeAllModals } from './js/components/closeAllModals.js';
import { copyText } from './js/components/copyLink.js';
import { changePrice } from './js/components/changePrice.js';
import { loadUserSettings } from './js/components/localStorage.js';
import { userData } from './js/userData.js';
import { logout } from './js/components/account.js';

loadUserSettings(userData);
logout();

document.addEventListener('submit', event => {
	event.preventDefault();
	formData(event);
});

refs.section.tabs.addEventListener('change', changePrice);

document.addEventListener('click', event => {
	const elem = event.target;
	const button = elem.closest('BUTTON');
	const link = elem.closest('A');
	const copy = elem.closest('[data-copy="no"]');
	const openDetails = choose('[data-details][open]');

	if (button) {
		if (openDetails) {
			openDetails.open = false;
		}
		const buttonClass = button.className;
		if (buttonClass.includes('izi')) {
			return;
		}
		const data = Object.entries(button.dataset)[0];
		switchContent(data, button);
	} else if (link) {
		const href = link.getAttribute('href');
		if (href && href.startsWith('#')) {
			event.preventDefault();
			scrollToSection(href);
		}
	} else if (elem === refs.section.overlay) {
		closeAllModals();
	} else if (copy) {
		copyText(copy);
	} else if (openDetails) {
		openDetails.open = false;
	}
});
