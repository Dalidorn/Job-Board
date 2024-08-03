<script>
    export let data;
    const { companies } = data;
</script>

<main>
    <a href="/search">Search</a>
    <h2>Companies</h2>
    <ul>
        {#each companies as company}
            <li>
                <a href={`/companies/${company.name}`}>{company.name}</a>
            </li>
        {/each}
    </ul>
</main>
