import { companies } from '$lib/testData.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const company = companies.find(company => company.name === params.company);
  const job = company.jobs.find(job => job.id === params.job);

  if (!job) throw error(404);

  return {
    job,
    company
  };
}