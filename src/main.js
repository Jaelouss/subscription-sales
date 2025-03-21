import { switchContent } from './js/switchContent.js';
import { scrollToSection } from './js/components/scrollToSection.js';
import { formData } from './js/forms';
import './main.scss';
import refs from './js/components/refs.js';
import { closeAllModals } from './js/components/closeAllModals.js';
import { copyText } from './js/components/copyLink.js';

document.addEventListener('submit', event => {
	event.preventDefault();
	formData(event);
});

document.addEventListener('click', event => {
	const elem = event.target;
	const button = elem.closest('BUTTON');
	const link = elem.closest('A');
	const copy = elem.closest('[data-copy="no"]');

	if (button) {
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
	}
});
