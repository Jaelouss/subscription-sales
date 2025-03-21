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

export function showPopUp(message, type = 'success', copy = false) {
	const options = {
		...iziOptions,
		title: type.charAt(0).toUpperCase() + type.slice(1),
		message: message,
	};
	if (copy) {
		options.buttons = [
			[
				'<button>Copy</button>',
				function (instance, toast) {
					const message = toast.querySelector('.iziToast-message').innerText;

					navigator.clipboard
						.writeText(message)
						.then(() => {
							showPopUp('Successfully copied', 'success');
						})
						.catch(err => {
							showPopUp('Error, try again', 'error');
						});
				},
				true,
			],
		];
	}

	switch (type) {
		case 'success':
			iziToast.success(options);
			break;
		case 'error':
			iziToast.error(options);
			break;
		case 'warning':
			iziToast.warning(options);
			break;
		case 'info':
			iziToast.info(options);
			break;
		default:
			iziToast.show(options);
	}
}
