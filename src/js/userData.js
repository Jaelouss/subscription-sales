export const userData = {
	currentUser: 'null',
	tab: 'main',
	priceX: 1,
};

export let form = false;

export const price = {};

export const temp = {};

export function clearPrice() {
	Object.keys(price).forEach(key => delete price[key]);
}
export function clearTemp() {
	Object.keys(temp).forEach(key => delete temp[key]);
}

export function formPass(bulean) {
	form = bulean;
}

export function findUserByEmail(userData, userEmail) {
	for (let key in userData) {
		if (key.startsWith('user')) {
			const user = userData[key];
			if (user.email === userEmail) {
				return user;
			}
		}
	}
	return null;
}
