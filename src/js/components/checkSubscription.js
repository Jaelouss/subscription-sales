import { option } from './options';

export function checkSubscriptionStatus(userData, currentUser, clickedDataset) {
	const currentSubscriptions = userData[currentUser].subscription || {};

	let clickedService, clickedPlan;
	for (const key in clickedDataset) {
		clickedService = key.replace(/([A-Z])/g, '').toLowerCase();
		clickedPlan = clickedDataset[key];
		break;
	}

	// Якщо підписки на сервіс немає, дозволяємо підписку
	if (!currentSubscriptions[clickedService]) {
		return { canSubscribe: true, message: '' };
	}

	const currentPlan = currentSubscriptions[clickedService];

	// Приводимо обидва плани до одного регістру для порівняння
	const normalizedCurrentPlan = currentPlan.toLowerCase();
	const normalizedClickedPlan = clickedPlan.toLowerCase();

	// Перевірка на однакову підписку
	if (normalizedCurrentPlan === normalizedClickedPlan) {
		return {
			canSubscribe: false,
			message: 'You have already issued this subscription',
			type: 'info',
		};
	}

	// Отримуємо плани сервісу і нормалізуємо їх
	const servicePlans = Object.keys(option[clickedService]).map(plan =>
		plan.toLowerCase()
	);
	const currentPlanIndex = servicePlans.indexOf(normalizedCurrentPlan);
	const clickedPlanIndex = servicePlans.indexOf(normalizedClickedPlan);

	// Перевірка на помилки: якщо план не знайдено
	if (currentPlanIndex === -1 || clickedPlanIndex === -1) {
		console.error(
			`Plan not found: currentPlan=${currentPlan}, clickedPlan=${clickedPlan}, servicePlans=`,
			servicePlans
		);
		return {
			canSubscribe: false,
			message: 'Error: Invalid subscription plan',
			type: 'error',
		};
	}

	// Перевірка на вищий/нижчий план
	if (clickedPlanIndex < currentPlanIndex) {
		return {
			canSubscribe: false,
			message: 'You already have a higher subscription',
			type: 'warning',
		};
	}

	return { canSubscribe: true, message: '' };
}
