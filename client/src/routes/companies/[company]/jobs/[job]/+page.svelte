<script>
    export let data;
    const { job, company } = data;
</script>

<main>
    <h2>{job.title}</h2>
    <a href={`/companies/${company.name}`}>at {company.name}</a>

    <p>Location: {job.location}</p>
    <p>Job Type: {job.type}</p>
    <p>Salary: {job.salary}</p>
    <p>Benefits: {job.benefits}</p>

    <h3>Job Description</h3>
    <p>{job.description}</p>

    <h3>Requirements</h3>
    <p>{job.requirements}</p>

    <h3>Responsibilities</h3>
    <p>{job.responsibilities}</p>

    <h3>Application Process</h3>
    <p>{job.applicationProcess}</p>
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

    a {
        color: lightgreen;
    }

    a:hover {
        color: green;
    }
</style>