import { option } from './options';

export function checkSubscriptionStatus(userData, currentUser, clickedDataset) {
	const currentSubscriptions = userData[currentUser].subscription || {};

	let clickedService, clickedPlan;
	for (const key in clickedDataset) {
		clickedService = key.replace(/([A-Z])/g, '').toLowerCase();
		clickedPlan = clickedDataset[key];
		break;
	}

	if (!currentSubscriptions[clickedService]) {
		return { canSubscribe: true, message: '' };
	}

	const currentPlan = currentSubscriptions[clickedService];

	const normalizedCurrentPlan = currentPlan.toLowerCase();
	const normalizedClickedPlan = clickedPlan.toLowerCase();

	if (normalizedCurrentPlan === normalizedClickedPlan) {
		return {
			canSubscribe: false,
			message: 'You have already issued this subscription',
			type: 'info',
		};
	}

	const servicePlans = Object.keys(option[clickedService]).map(plan =>
		plan.toLowerCase()
	);
	const currentPlanIndex = servicePlans.indexOf(normalizedCurrentPlan);
	const clickedPlanIndex = servicePlans.indexOf(normalizedClickedPlan);

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

	if (clickedPlanIndex < currentPlanIndex) {
		return {
			canSubscribe: false,
			message: 'You already have a higher subscription',
			type: 'warning',
		};
	}

	return { canSubscribe: true, message: '' };
}
