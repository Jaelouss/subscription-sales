import { userData } from '../userData';
import { classAdd, classRemove } from './classChange';
import { setLocal } from './localStorage';
import { choose } from './refs';

export function createNewUser(userData) {
	const existingUsers = Object.keys(userData)
		.filter(key => key.startsWith('user'))
		.map(key => parseInt(key.replace('user', '')));

	const newUserNumber =
		existingUsers.length > 0 ? Math.max(...existingUsers) + 1 : 0;
	const newUserKey = `user${newUserNumber}`;

	userData[newUserKey] = {
		email: null,
		name: null,
		tel: null,
		password: null,
		subscription: {
			netflix: null,
			youtube: null,
			spotify: null,
		},
	};

	userData.currentUser = newUserKey;

	setLocal(userData);
}

const loginBtn = choose('#header-login');
const accountBtn = choose('#header-account');

export function login(user) {
	userData.currentUser = user;
	classAdd(loginBtn);
	classRemove(accountBtn);
	renderUserSubscriptions();
}
export function logout() {
	userData.currentUser = 'null';
	classAdd(accountBtn);
	classRemove(loginBtn);
}

function renderUserSubscriptions() {}
