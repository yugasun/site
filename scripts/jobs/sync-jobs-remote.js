const fs = require('fs')
const request = require('sync-request');
const dataFile = 'src/components/pages/company/jobs/OpenPositions/data.js'


const opts = {headers: {'User-Agent': 'Node.js', 'Content-Type': 'application/json'}}
const res = request('GET', 'https://api.lever.co/v0/postings/serverless', opts)

const rawJobs = JSON.parse(res.getBody('utf-8'))

const jobs = []
rawJobs.forEach((rawJob) => {
  job = {
    heading: rawJob.categories.team,
    title: rawJob.text,
    location: rawJob.categories.location,
    status: rawJob.categories.commitment,
    link: rawJob.hostedUrl
  }
  jobs.push(job)
})

const output = `export default ${JSON.stringify(jobs, null, 4)}`

fs.writeFileSync(dataFile, output)
