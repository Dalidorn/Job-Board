import { companies } from "$lib/testData.js";
import { error } from '@sveltejs/kit';

export function load() {

    if (!companies) throw error(404);

    return {
        companies
    };
}