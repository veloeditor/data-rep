getAPIData().then((jobs) => {
    for (const job of jobs.results) {
        const jobHTML = createJobHTML(job)
        renderJob(jobHTML)
    }
})




