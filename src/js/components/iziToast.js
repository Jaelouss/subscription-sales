import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const iziOptions = {
	titleColor: 'black',
	titleSize: '20px',
	messageColor: 'black',
	messageSize: '20px',
	position: 'bottomRight',
	transitionIn: 'bounceInLeft',
	closeOnClick: true,
	zindex: 5,
	displayMode: 2,
};

export function showPopUp(message) {
	iziToast.success({
		...iziOptions,
		title: 'Success',
		message: message,
	});
}
