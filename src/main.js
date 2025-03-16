import './main.scss';
import refs from './js/components/refs';
import './js/blocks/hero';

window.addEventListener('resize', () => {
	if (window.innerWidth > 1024) {
		closeModal();
	}
});

document.addEventListener('click', function (event) {
	const button = event.target.closest('button');
	if (button) {
		const dataset = button.dataset;
		const key = Object.keys(dataset)[0];
		const value = dataset[key];
		if (!button.classList.contains('open')) {
			button.classList.add('open');
			showContent(key, value);
		} else {
			button.classList.remove('open');
			hideContent(key, value);
		}
	}
});

refs.overlay.addEventListener('click', event => {
	refs.overlay.classList.add('visually-hidden');
	refs.modal.classList.add('visually-hidden');
	Array.from(refs.modal.children).forEach(li =>
		li.classList.add('visually-hidden')
	);
	closeButtons();
});

function showContent(key, value) {
	refs.overlay.classList.remove('visually-hidden');
	refs[key].classList.remove('visually-hidden');
	refs[key]
		.querySelector(`.${key}__${value}`)
		.classList.remove('visually-hidden');
}
function hideContent(key, value) {
	refs.overlay.classList.add('visually-hidden');
	refs[key].classList.add('visually-hidden');
	refs[key].querySelector(`.${key}__${value}`).classList.add('visually-hidden');
}

function closeModal() {
	if (!refs.modal.children[0].classList.contains('visually-hidden')) {
		refs.modal.children[0].classList.add('visually-hidden');
		refs.modal.classList.add('visually-hidden');
		refs.overlay.classList.add('visually-hidden');
		closeButtons();
	}
}

function closeButtons() {
	if (document.querySelectorAll('.open')) {
		document
			.querySelectorAll('.open')
			.forEach(btn => btn.classList.remove('open'));
	}
}
