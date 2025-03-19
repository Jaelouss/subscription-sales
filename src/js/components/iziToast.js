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

export function showPopUp() {
	iziToast.success({
		...iziOptions,
		title: 'Success',
		message: 'The link is successfully copied!',
	});
}
