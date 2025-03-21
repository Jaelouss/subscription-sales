import { closeAllModals } from './components/closeAllModals';
import { generateNumber } from './components/generateNumber';
import { goToMain } from './components/mainPage';
import { openModal } from './components/openModal';
import { openTab } from './components/openTab';

export function switchContent(data, button) {
	const windowType = data[0];
	const windowName = data[1];

	const className = `${windowType}__${windowName}`;
	// if(button.type==='submit' && )
	if (windowType === 'modal') {
		openModal(className);
		if (windowName === 'email' || windowName === 'forget-code') {
			generateNumber();
		}
	}
	if (windowType === 'tab') {
		if (windowName === 'main-logout' || windowName === 'main') {
			goToMain();
		} else {
			openTab(className);
		}
	}
	if (
		windowType === 'platform' ||
		windowType === 'pay' ||
		windowType === 'lang'
	) {
		openModal('modal__working');
	}
	if (windowType === 'button') {
		if (windowName === 'close') {
			closeAllModals();
		}
		if (windowName === 'choose') {
			goToMain('choose');
		}
		if (windowName === 'password') {
			const firstIcon = button.children[0];
			const secondIcon = button.children[1];
			const parentDiv = button.parentElement;
			const passwordInput = parentDiv.querySelector('input');

			firstIcon.classList.toggle('visually-hidden');
			secondIcon.classList.toggle('visually-hidden');

			if (firstIcon.classList.contains('visually-hidden')) {
				passwordInput.type = 'text';
			} else {
				passwordInput.type = 'password';
			}
		}
		if (windowName === 'resent') {
			generateNumber();
		}
	}
}
