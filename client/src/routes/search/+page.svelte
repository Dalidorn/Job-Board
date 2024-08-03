<script>
    export let data;
    const { companies } = data;
</script>

<main>
    <h2>Search Results</h2>

    <h3>Companies</h3>
    <ul>
        {#each companies as company}
            <li>
                <a href={`/companies/${company.name}`}>{company.name}</a>
            </li>
        {/each}
    </ul>

    <h3>Job Listings</h3>
    <ul>
        {#each companies as company}
            {#each company.jobs as job}
                <li>
                    <a href={`/companies/${company.name}/jobs/${job.id}`}>
                        {job.title} at {company.name} - {job.location}
                    </a>
                </li>
            {/each}
        {/each}
    </ul>
</main>
