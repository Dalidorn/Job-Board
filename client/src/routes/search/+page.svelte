<script>
    //filler data
    let results = [
        {
            title: "Software Engineer",
            company: "TestCompany123",
            location: "Remote",
            id: "software-engineer",
        },
        {
            title: "Product Manager",
            company: "Business Inc.",
            location: "New York, NY",
            id: "product-manager",
        },
    ];
</script>

<main>
    <h2>Search Results</h2>
    <ul>
        {#each results as result}
            <li>
                <a href={`/jobs/${result.id}`}>
                    {result.title} at {result.company} - {result.location}
                </a>
            </li>
        {/each}
    </ul>
</main>