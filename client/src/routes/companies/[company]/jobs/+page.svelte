<script>
    export let data;
    const { company } = data;
</script>

<main>
    <a href="/companies/{company.name}">Back to {company.name}</a>
    <h2>Jobs at {company.name}</h2>

    <ul>
        {#each company.jobs as job}
            <li>
                <a href={`/companies/${company.name}/jobs/${job.id}`}
                    >{job.title} - {job.location}</a
                >
            </li>
        {/each}
    </ul>
</main>
