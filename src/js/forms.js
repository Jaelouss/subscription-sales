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
	tempAcc,
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
			allFilled = validateCreateForm(form, formDataObject);
		} else if (formClass === 'subscription__form') {
			allFilled = validateSubscriptionForm(form);
		} else if (formClass === 'purschase__form') {
			allFilled = validatePurschaseForm(form);
		}
	}

	if (allFilled) {
		const formClass = form.classList[0];
		if (formClass !== 'create__form' && formClass !== 'email__form') {
			if (userData.currentUser && userData[userData.currentUser]) {
				for (const key in formDataObject) {
					userData[userData.currentUser][key] = formDataObject[key];
				}
			} else {
				console.error('No current user defined. Cannot update userData.');
				showPopUp('Error: Please log in first.', 'error');
				return;
			}
		}

		setLocal(userData);

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
	createNewUser(userData);
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

function validateCreateForm(form, formDataObject) {
	const email = form.querySelector('input[name="email"]').value.trim();
	const user = findUserByEmail(userData, email);

	if (user) {
		showPopUp('This email is already registered', 'error');
		return false;
	}
	for (const key in formDataObject) {
		tempAcc[key] = formDataObject[key];
	}

	return true;
}

function validateSubscriptionForm(form) {
	const email = form.querySelector('input[name="email"]').value.trim();
	const userEmail = userData[userData.currentUser].email;
	if (email !== userEmail) {
		showPopUp('Email does not match', 'error');
		return false;
	}
	return true;
}

function validatePurschaseForm(form) {
	const cardNumberInput = form
		.querySelector('input[name="card-number"]')
		.value.trim();
	const expirationDateInput = form
		.querySelector('input[name="card-date"]')
		.value.trim();
	const cvcInput = form.querySelector('input[name="card-cvc"]').value.trim();

	const cleanedCardNumber = cardNumberInput.replace(/\s/g, '');
	if (cleanedCardNumber.length !== 16) {
		showPopUp('Card number must be 16 digits.', 'error');
		return false;
	}

	if (!/^\d{2}\/\d{2}$/.test(expirationDateInput)) {
		showPopUp('Expiration date must be in MM/YY format.', 'error');
		return false;
	}

	if (cvcInput.length !== 3) {
		showPopUp('CVC must be 3 digits.', 'error');
		return false;
	}

	showPopUp('Payment details validated successfully!', 'success');
	return true;
}
