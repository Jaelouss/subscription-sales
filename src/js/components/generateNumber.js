import { temp } from '../userData';
import { showPopUp } from './iziToast';

export function generateNumber() {
	let arr = [];
	for (let i = 0; i < 6; i++) {
		arr.push(Math.floor(Math.random() * 10));
	}
	const numbers = arr.join('');
	temp.code = numbers;
	console.log(temp);

	showPopUp(numbers, 'info', 'copy');
}
