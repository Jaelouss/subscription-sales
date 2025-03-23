import { createNewUser, login } from './components/account';
import { showPopUp } from './components/iziToast';
import { loadUserSettings, setLocal } from './components/localStorage';
import { choose } from './components/refs';
import { switchContent } from './switchContent';
import {
	clearTemp,
	findUserByEmail,
	formPass,
	temp,
	userData,
} from './userData';

export function formData(event) {
	const form = event.target;
	const button = form.querySelector('button[type="submit"]');
	const requiredInputs = form.querySelectorAll('[required]');
	const data = Object.entries(button.dataset)[0];
	const formData = new FormData(form);
	const formDataObject = Object.fromEntries(formData.entries());
	let allFilled = validateRequiredInputs(requiredInputs);

	if (allFilled) {
		const formClass = form.classList[0];

		if (formClass === 'login__form') {
			const user = validateLoginInputs(form);
			if (user) {
				for (let key in userData) {
					if (key.startsWith('user') && userData[key] === user) {
						login(key);
						break;
					}
				}
			} else {
				allFilled = false;
			}
		} else if (formClass === 'email__form') {
			allFilled = validateEmailForm(form);
		} else if (form.querySelector('input[name="email-code"]')) {
			allFilled = validateEmailCode(
				form.querySelector('input[name="email-code"]')
			);
		} else if (form.querySelector('#new-password')) {
			allFilled = validateNewPassword();
		} else if (formClass === 'create__form') {
			allFilled = validateCreateForm(form);
		}
	}

	if (allFilled) {
		for (const key in formDataObject) {
			userData[userData.currentUser][key] = formDataObject[key];
		}

		setLocal(userData);

		if (form.classList[0] === 'create__form') {
			showPopUp('Account successfully created!', 'success');
		}
		if (form.classList[0] === 'login__form') {
			showPopUp('Welcome back!', 'success');
		}

		formPass(true);
		form.reset();
		switchContent(data, button);
	}
}

function validateRequiredInputs(requiredInputs) {
	return Array.from(requiredInputs).every(input => input.value.trim());
}

function validateLoginInputs(form) {
	const email = form.querySelector('input[name="email"]').value;
	const password = form.querySelector('input[name="password"]').value;
	const user = findUserByEmail(userData, email);

	if (!user) {
		showPopUp('Such a user does not exist', 'error');
		return false;
	}
	if (user.password !== password) {
		showPopUp('Incorrect password. Try again.', 'error');
		return false;
	}
	return user;
}

function validateEmailForm(form) {
	const email = form.querySelector('input[name="email"]').value.trim();
	const user = findUserByEmail(userData, email);

	if (!user) {
		showPopUp('Such a user does not exist', 'error');
		return false;
	}
	return true;
}

function validateEmailCode(input) {
	if (input.value.trim() !== temp.code) {
		showPopUp('Invalid code. Try again.', 'error');
		return false;
	}
	clearTemp();
	return true;
}

function validateNewPassword() {
	const newPassword = choose('#new-password').value;
	const confirmPassword = choose('#confirm-password').value;

	if (newPassword !== confirmPassword) {
		showPopUp('Passwords do not match. Try again.', 'error');
		return false;
	}
	showPopUp('Your password has been successfully changed!', 'success');
	return true;
}

function validateCreateForm(form) {
	const email = form.querySelector('input[name="email"]').value.trim();
	const user = findUserByEmail(userData, email);

	if (user) {
		showPopUp('This email is already registered', 'error');
		return false;
	}
	createNewUser(userData);
	return true;
}
