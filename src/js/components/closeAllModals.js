import { classAdd, classRemove } from './classChange';
import refs from './refs';

export function closeAllModals() {
	classRemove(refs.html, 'is-lock');
	classAdd(refs.section.overlay);
	Array.from(refs.children.modal).forEach(child => {
		classAdd(child);
	});
}
