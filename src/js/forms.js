import { createNewUser, login } from './components/account';
import { classAdd, classRemove } from './components/classChange';
import { showPopUp } from './components/iziToast';
import { loadUserSettings, setLocal } from './components/localStorage';
import { choose } from './components/refs';
import { switchContent } from './switchContent';
import { findUserByEmail, formPass, temp, userData } from './userData';

export function formData(event) {
	const form = event.target;
	const button = form.querySelector('button[type="submit"]');
	const requiredInputs = form.querySelectorAll('[required]');
	const data = Object.entries(button.dataset)[0];
	const formData = new FormData(form);
	const formDataObject = Object.fromEntries(formData.entries());
	let allFilled = true;

	requiredInputs.forEach(input => {
		if (!input.value.trim()) {
			allFilled = false;
		} else if (form.classList[0] === 'login__form') {
			let inputEmail = form.querySelector('input[name="email"]').value.trim();
			let inputPassword = form
				.querySelector('input[name="password"]')
				.value.trim();
			let user = findUserByEmail(userData, inputEmail);

			if (!user) {
				showPopUp('Such a user does not exist', 'error');
				allFilled = false;
			} else if (user.password !== inputPassword) {
				showPopUp('Incorrect password. Try again.', 'error');
				allFilled = false;
			} else if (user) {
				for (let key in userData) {
					if (key.startsWith('user') && userData[key] === user) {
						login(key);

						break;
					}
				}
			}
		} else if (form.classList[0] === 'email__form') {
			let inputEmail = form.querySelector('input[name="email"]').value.trim();
			let user = findUserByEmail(userData, inputEmail);
			if (!user) {
				showPopUp('Such a user does not exist', 'error');
				allFilled = false;
			}
		} else if (input.name === 'email-code') {
			if (input.value.trim() !== temp.code) {
				showPopUp('Invalid code. Try again.', 'error');
				allFilled = false;
			}
		} else if (input.id === 'new-password') {
			let newPassword = choose('#new-password').value;
			let confirmPassword = choose('#confirm-password').value;
			if (newPassword !== confirmPassword) {
				showPopUp('Passwords do not match. Try again.', 'error');
				allFilled = false;
			} else {
				showPopUp('Your password has been successfully changed!', 'success');
			}
		} else if (form.classList[0] === 'create__form') {
			loadUserSettings(userData);
			let inputEmail = form.querySelector('input[name="email"]').value.trim();
			let user = findUserByEmail(userData, inputEmail);
			if (user) {
				showPopUp('This email is already registered', 'error');
				allFilled = false;
			} else {
				createNewUser(userData);
			}
		}
	});

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
