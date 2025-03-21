export function formData(event) {
	const form = event.target;
	const button = Object.entries(event.submitter.dataset)[0];
	console.log('button:', button);

	const formData = new FormData(form);
	const data = Object.fromEntries(formData);
	console.log('Дані:', data);
}
