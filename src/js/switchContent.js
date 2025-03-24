import { logout, renderUserAccount } from './components/account';
import { checkSubscriptionStatus } from './components/checkSubscription';
import { closeAllModals } from './components/closeAllModals';
import { generateNumber } from './components/generateNumber';
import { showPopUp } from './components/iziToast';
import { loadUserSettings, setLocal } from './components/localStorage';
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
	const type = data[0];
	const name = data[1];

	const className = `${type}__${name}`;

	if (button.type === 'submit' && !form) {
		return;
	}
	if (type === 'modal') {
		if (name === 'email' || name === 'forget-code') {
			generateNumber();
		}
		if (name === 'successful') {
			showPopUp('Account successfully created!', 'success');
		}
		if (name === 'subscription') {
			if (!userData.currentUser) {
				openModal('modal__login');
				return;
			} else {
				const dataset = button.parentElement.dataset;

				const subscriptionCheck = checkSubscriptionStatus(
					userData,
					userData.currentUser,
					dataset
				);

				if (!subscriptionCheck.canSubscribe) {
					showPopUp(subscriptionCheck.message, subscriptionCheck.type);
					return;
				} else {
					for (const key in dataset) {
						temp[key] = dataset[key];
					}
				}
			}
		}
		if (name === 'paid') {
			for (const key in temp) {
				userData[userData.currentUser].subscription[key] = temp[key];
			}
			setLocal(userData);
			loadUserSettings(userData);
			renderUserAccount();
			clearTemp();
		}

		openModal(className);
	}
	if (type === 'tab') {
		userData.tab = name;
		clearPrice();
		if (name === 'netflix' || name === 'youtube' || name === 'spotify') {
			savePrice();
		}
		if (name === 'main') {
			goToMain();
		} else if (name === 'main-logout') {
			logout();
		} else {
			openTab(className);
		}
	}
	if (type === 'platform' || type === 'pay' || type === 'lang') {
		openModal('modal__working');
	}
	if (type === 'button') {
		if (name === 'close') {
			closeAllModals();
		}
		if (name === 'choose') {
			goToMain('choose');
		}
		if (name === 'password') {
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
		if (name === 'resent') {
			generateNumber();
		}
	}
	formPass(false);
}
