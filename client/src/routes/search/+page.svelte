<script>
    export let data;
    const { companies } = data;
</script>

<main>
    <h2>Placeholder Search Menu</h2>

    <input type="text" placeholder="Search for jobs" />
    <button>Search</button>

    
    <h2>Placeholder Results</h2>

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

<style>
    main {
        margin: 2rem;
        color: white;
    }

    h2 {
        margin-bottom: 1rem;
    }

    h3 {
        margin-top: 2rem;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 1rem;
    }

    a {
        color: lightgreen;
    }

    a:hover {
        color: green;
    }
</style>