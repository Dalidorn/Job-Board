import { companies } from "$lib/testData.js";
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const company = companies.find((company) => company.name === params.company);

	if (!company) throw error(404);

	return {
		company
	};
}