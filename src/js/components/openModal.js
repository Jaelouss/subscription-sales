import { classAdd, classRemove } from './classChange';
import refs from './refs';

export function openModal(className) {
	classAdd(refs.html, 'is-lock');
	classRemove(refs.section.overlay);

	Array.from(refs.children.modal).forEach(element => {
		if (element.classList.contains(className)) {
			classRemove(element);
		} else classAdd(element);
	});
}
