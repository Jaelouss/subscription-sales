let choose = selector => document.querySelector(selector);

export default {
	overlay: choose('#overlay'),
	modal: choose('#modal'),
	main: choose('main'),
	header: choose('#header'),
	discount: choose('#copy'),
};
