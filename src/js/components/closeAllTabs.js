import { classAdd, classRemove } from './classChange';
import refs from './refs';

export function closeAllTabs() {
	classRemove(refs.section.main);
	classAdd(refs.section.tabs);
	Array.from(refs.children.tab).forEach(child => {
		classAdd(child);
	});
}
