<script>
    //filler data
    export let job = {
        title: "Software Engineer",
        company: "TestCompany123",
        location: "Remote",
        description:
            "Join TestCompany123 as a Software Engineer and contribute to our fictional testing projects.",
        type: "Full-time",
        salary: "$80,000 - $100,000",
        benefits: "Health, Dental, 401k",
        requirements: "3+ years experience in software development",
        responsibilities: "Develop and maintain web applications",
        applicationProcess: "Apply through our website",
    };
</script>

<main>
    <h2>{job.title}</h2>
    <a href={`/companies/${job.company}`}>at {job.company}</a>

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