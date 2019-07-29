const createJobHTML = (job) => {
    return `
        <section class="job">
            <h1>${job.organization}</h1>
            <h2>${job.role}</h2>
            <aside>${job.city}</h2>
        </section>
    `
}