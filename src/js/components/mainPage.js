import { classAdd, classRemove } from './classChange';
import { closeAllModals } from './closeAllModals';
import { closeAllTabs } from './closeAllTabs';
import refs from './refs';

export function goToMain(sectionId = null) {
	closeAllModals();
	closeAllTabs();

	if (sectionId) {
		const targetSection = document.getElementById(sectionId);
		if (targetSection) {
			const sectionTop =
				targetSection.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo({
				top: sectionId === 'header' ? 0 : sectionTop - 150,
			});
		}
	} else {
		window.scrollTo({ top: 0 });
	}
}
