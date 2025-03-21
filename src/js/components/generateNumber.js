import { showPopUp } from './iziToast';

export function generateNumber() {
	let arr = [];
	for (let i = 0; i < 6; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	const numbers = arr.join('');
	showPopUp(numbers, 'info', 'copy');
}
