<script>
    export let data;
    const { company } = data;
</script>

<main>
    <h2>{company.name}</h2>

    <p><strong>Industry:</strong> {company.industry}</p>
    <p><strong>Company Size:</strong> {company.size}</p>
    <p><strong>Company Culture:</strong> {company.culture}</p>

    <h3>Overview</h3>
    <p>{company.overview}</p>

    <a href="/companies/{company.name}/jobs">View Current Listings</a>

    <h3>Website</h3>
    <p><a href={company.website} target="_blank">{company.website}</a></p>
    <h3>Social Media</h3>
    <ul>
        <li>
            <a href={company.socialMedia.linkedin} target="_blank">LinkedIn</a>
        </li>
        <li>
            <a href={company.socialMedia.twitter} target="_blank">Twitter</a>
        </li>
        <li>
            <a href={company.socialMedia.facebook} target="_blank">Facebook</a>
        </li>
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