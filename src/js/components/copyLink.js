import { classAdd, classRemove } from './classChange';
import { showPopUp } from './iziToast';

export async function copyText(elem) {
	const beforeCopy = elem.children[1];
	const afterCopy = elem.children[2];
	classAdd(beforeCopy);
	classRemove(afterCopy);
	elem.dataset.copy = 'yes';

	try {
		await navigator.clipboard.writeText('https://github.com/Jaelouss');
		showPopUp('The link is copied', 'success');
		setTimeout(() => {
			classRemove(beforeCopy);
			classAdd(afterCopy);
			elem.dataset.copy = 'no';
		}, 5000);
	} catch (err) {
		showPopUp('Something went wrong, try again', 'error');
	}
}
