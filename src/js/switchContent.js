import { logout } from './components/account';
import { closeAllModals } from './components/closeAllModals';
import { generateNumber } from './components/generateNumber';
import { goToMain } from './components/mainPage';
import { openModal } from './components/openModal';
import { openTab } from './components/openTab';
import { savePrice } from './components/savePrice';
import {
	clearPrice,
	clearTemp,
	form,
	formPass,
	price,
	temp,
	userData,
} from './userData';

export function switchContent(data, button) {
	const windowType = data[0];
	const windowName = data[1];

	const className = `${windowType}__${windowName}`;
	if (button.type === 'submit' && !form) {
		return;
	}
	if (button.id === 'login') {
		console.log('yes');
	}
	if (windowType === 'modal') {
		if (windowName === 'email' || windowName === 'forget-code') {
			generateNumber();
		}
		if (windowName === 'subscription') {
			const dataset = button.parentElement.dataset;
			for (const key in dataset) {
				temp[key] = dataset[key];
			}
		}
		if (windowName === 'paid') {
			for (const key in temp) {
				userData[userData.currentUser].subscription[key] = temp[key];
			}
			clearTemp();
		}
		if (windowName === 'subscription') {
			if (userData.currentUser === 'null') {
				openModal('modal__login');
				return;
			}
		}
		openModal(className);
	}
	if (windowType === 'tab') {
		userData.tab = windowName;
		clearPrice();
		if (
			windowName === 'netflix' ||
			windowName === 'youtube' ||
			windowName === 'spotify'
		) {
			savePrice();
		}
		if (windowName === 'main') {
			goToMain();
		} else if (windowName === 'main-logout') {
			logout();
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
	formPass(false);
}
