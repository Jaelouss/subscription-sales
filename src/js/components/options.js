export const option = {
	netflix: {
		basic: ['Ad-free music listening'],
		standart: ['Ad-free music listening', 'Play anywhere - even offline'],
		premium: [
			'Ad-free music listening',
			'Play anywhere - even offline',
			'On-demand playback',
		],
	},
	spotify: {
		individual: ['Ad-free music listening, play offline, on-demand playback'],
		duo: [
			'Ad-free music listening, play offline, on-demand playback',
			'2 Premium accounts for a couple under one roof',
		],
		family: [
			'Ad-free music listening, play offline, on-demand playback',
			'2 Premium accounts for a couple under one roof',
			'Block explicit music',
		],
	},
	youtube: {
		music: ['Listen to music without ads, in the background and offline'],
		premium: [
			'Listen to music without ads, in the background and offline',
			'YouTube and YouTube Music without ads, in the background and offline',
		],
	},
};

export function makeOptions(title, plan) {
	let a = title.toLowerCase();
	let b = plan.toLowerCase();
	const markup = option[a]?.[b] || [];
	return markup
		.map(elem => {
			return `<p class="account__plans-options-text">
            <svg
                class="icon icon-copy success options-icon"
                height="24"
                width="24"
                fill="blue"
            >
                <use href="/images/svg/sprite.svg#file-copy-success"></use>
            </svg>
            ${elem}
        </p>`;
		})
		.join('');
}
