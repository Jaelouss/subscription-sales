import { clearTempAcc, tempAcc, userData } from '../userData';
import { classAdd, classRemove } from './classChange';
import { setLocal } from './localStorage';
import { goToMain } from './mainPage';
import { makeOptions } from './options';
import { choose } from './refs';

export function createNewUser(userData) {
	const existingUsers = Object.keys(userData)
		.filter(key => key.startsWith('user'))
		.map(key => parseInt(key.replace('user', '')));

	const newUserNumber =
		existingUsers.length > 0 ? Math.max(...existingUsers) + 1 : 1;
	const newUserKey = `user${newUserNumber}`;

	userData[newUserKey] = {
		id: newUserNumber,
		email: null,
		name: null,
		tel: null,
		password: null,
		subscription: {},
	};

	userData.currentUser = newUserKey;

	for (const key in tempAcc) {
		userData[newUserKey][key] = tempAcc[key];
	}

	setLocal(userData);
	login(newUserKey);
	clearTempAcc();
}

const loginBtn = choose('#header-login');
const accountBtn = choose('#header-account');

export function login(user) {
	userData.currentUser = user;
	classAdd(loginBtn);
	classRemove(accountBtn);
	renderUserAccount();
	setLocal(userData);
}

export function logout() {
	userData.currentUser = null;
	classAdd(accountBtn);
	classRemove(loginBtn);
	goToMain();
	setLocal(userData);
}

export function renderUserAccount() {
	const section = choose('#account');
	const currentUser = userData.currentUser;
	const id = section.querySelector('#account-id');
	const name = section.querySelector('#account-name');
	const email = section.querySelector('#account-email');
	const tel = section.querySelector('#account-tel');
	const list = section.querySelector('#account__plans');
	const subscription = Object.entries(userData[currentUser].subscription);

	id.textContent = userData[currentUser].id;
	name.textContent = userData[currentUser].name || 'N/A';
	email.textContent = userData[currentUser].email || 'N/A';
	tel.textContent = userData[currentUser].tel || 'N/A';

	if (subscription.length === 0) {
		return;
	} else {
		list.innerHTML = '';
		const subscriptionHTML = subscription
			.map(([title, plan]) => {
				const capitalizedTitle = capitalizeFirstLetter(title);

				return `
                    <li class="account__plans-item">
                        <div class="account__plans-header plan-${title}">
                            <h3 class="account__plans-header-title">${capitalizedTitle} Premium</h3>
                            <p class="account__plans-header-title">${plan}</p>
                        </div>
                        <div class="account__plans-options">
                            ${makeOptions(title, plan)}
                            <button
                                class="button button-text account__plans-options-button choose underline"
                                type="button"
                                data-button="choose"
                            >
                                Change plan
                            </button>
                        </div>
                    </li>`;
			})
			.join('');
		list.insertAdjacentHTML('beforeend', subscriptionHTML);
	}
}
function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
