export const choose = selector => document.querySelector(selector);
export const chooseAll = selector => document.querySelectorAll(selector);

export default {
	html: choose('html'),
	section: {
		main: choose('#main'),
		overlay: choose('#overlay'),
		tabs: choose('#tabs'),
	},
	children: {
		tab: choose('#tab').children,
		modal: choose('#modal').children,
	},
};
