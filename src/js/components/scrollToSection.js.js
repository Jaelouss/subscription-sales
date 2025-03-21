import { goToMain } from './mainPage';
import { choose } from './refs';

export function scrollToSection(sectionId) {
	const section = choose(sectionId);
	const id = sectionId.slice(1);
	if (section) {
		goToMain(id);
	}
}
