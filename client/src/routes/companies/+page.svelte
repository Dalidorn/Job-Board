<script>
    export let data;
    const { companies } = data;
</script>

<main>
    <h2>Companies</h2>
    <ul>
        {#each companies as company}
            <li>
                <a href={`/companies/${company.name}`}>{company.name}</a>
            </li>
        {/each}
    </ul>
</main>

<style>
    main {
        margin: 2rem;
        color: white;
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