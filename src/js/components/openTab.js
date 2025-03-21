import { classAdd, classRemove } from './classChange';
import { closeAllModals } from './closeAllModals';
import refs from './refs';

export function openTab(className) {
	classRemove(refs.section.tabs);
	classAdd(refs.section.main);

	closeAllModals();

	Array.from(refs.children.tab).forEach(element => {
		if (element.classList.contains(className)) {
			classRemove(element);
		} else classAdd(element);
	});
	window.scrollTo({ top: 0 });
}
