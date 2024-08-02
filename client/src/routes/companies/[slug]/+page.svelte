<script>
    //filler data
    export let company = {
        name: "TestCompany123",
        overview:
            "TestCompany123 is a fictional company used for testing purposes.",
        industry: "Testing Industry",
        size: "10-50 employees",
        culture: "Friendly and fictional",
        website: "https://testcompany123.fake",
        socialMedia: {
            linkedin: "https://linkedin.com/company/testcompany123",
            twitter: "https://twitter.com/testcompany123",
            facebook: "https://facebook.com/testcompany123",
        },
    };
</script>

<main>
    <h2>{company.name}</h2>

    <p><strong>Industry:</strong> {company.industry}</p>
    <p><strong>Company Size:</strong> {company.size}</p>
    <p><strong>Company Culture:</strong> {company.culture}</p>

    <h3>Overview</h3>
    <p>{company.overview}</p>

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