import './main.scss';
import refs from './js/components/refs';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './js/blocks/hero';

const iziOptions = {
	titleColor: 'black',
	titleSize: '20px',
	messageColor: 'black',
	messageSize: '20px',
	position: 'bottomRight',
	transitionIn: 'bounceInLeft',
	closeOnClick: true,
	zindex: 5,
	displayMode: 2,
};

let choose = selector => document.querySelector(selector);
let chooseAll = selector => document.querySelectorAll(selector);

window.addEventListener('resize', () => {
	if (window.innerWidth > 1024) {
		closeMenu();
	}
});

document.addEventListener('click', function (event) {
	if (event.target === choose('.iziToast-close')) {
		return;
	}
	const button = event.target.closest('button');
	const detailsOpen = chooseAll('details[open]');
	if (event.target === refs.discount) {
		const text = 'https://github.com/Jaelouss';
		navigator.clipboard
			.writeText(text)
			.then(() => {
				refs.discount.style.color = 'purple';
				chooseAll('.discount__copy-icon').forEach(svg => {
					if (svg.classList.contains('visually-hidden')) {
						svg.classList.remove('visually-hidden');
					} else {
						svg.classList.add('visually-hidden');
					}
					if (svg.classList.contains('success')) {
						if (!svg.classList.contains('visually-hidden')) {
							iziToast.success({
								...iziOptions,
								title: 'Success',
								message: 'The link is successfully copied!',
							});
						}
					}
				});
			})
			.catch(err => console.error('Copy error: ', err));
	}

	if (button) {
		const dataset = button.dataset;
		const key = Object.keys(dataset)[0];
		const value = dataset[key];
		if (!button.classList.contains('open')) {
			if (value === 'menu') {
				button.classList.add('open');
				refs.header.style.zIndex = '5';
				refs.overlay.classList.add('bg-menu');
				Array.from(refs.main.children).forEach(section =>
					section.classList.add('visually-hidden')
				);
			} else {
				refs.overlay.classList.add('bg-blur');
			}
			showContent(key, value);
		} else {
			if (value === 'menu') {
				button.classList.remove('open');
				refs.header.style.zIndex = '0';
				Array.from(refs.main.children).forEach(section =>
					section.classList.remove('visually-hidden')
				);
			}
			hideContent(key, value);
			refs.overlay.classList.remove('bg-menu');
			refs.overlay.classList.remove('bg-blur');
		}
	}

	if (detailsOpen) {
		detailsOpen.forEach(details => details.removeAttribute('open'));
	}
});

refs.overlay.addEventListener('click', event => {
	Array.from(refs.main.children).forEach(section =>
		section.classList.remove('visually-hidden')
	);
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

function closeMenu() {
	if (!refs.modal.children[0].classList.contains('visually-hidden')) {
		Array.from(refs.main.children).forEach(section =>
			section.classList.remove('visually-hidden')
		);
		refs.modal.children[0].classList.add('visually-hidden');
		refs.modal.classList.add('visually-hidden');
		refs.overlay.classList.add('visually-hidden');
		refs.header.style.zIndex = '0';
		closeButtons();
	}
}

function closeButtons() {
	if (chooseAll('.open')) {
		chooseAll('.open').forEach(btn => btn.classList.remove('open'));
	}
}
