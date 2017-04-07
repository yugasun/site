import React from 'react'
import classnames from 'classnames'
import Default from '../../layouts/Default'
import styles from './Jobs.css'
import ContentLoading from '../../components/ContentLoading'

function fetchJobs() {
  return fetch('https://api.lever.co/v0/postings/serverless?mode=json').then(result => result.json())
}

function filterJobs(jobs, team) {
  return jobs.filter(job => (
    job.categories.team === team
  ))
}

const Job = ({ job }) => (
  <div className={styles.job}>
    <a href={job.hostedUrl}>
      <h4>{job.text}</h4>
      {Object.keys(job.categories).map(key => job.categories[key]).join(', ')}
    </a>
  </div>
)

const Positions = ({ jobs, team }) => (
  <div className={styles.jobs}>
    <h1>{team} positions</h1>
    {filterJobs(jobs, team).map(job => (
      <Job key={job.id} job={job} />
    ))}
  </div>
)

export default class JobsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      jobs: []
    }
  }

  componentDidMount() {
    fetchJobs().then(jobs => this.setState({ isLoading: false, jobs }))
  }

  render() {
    return (
      <Default {...this.props} fullWidth>
        <div className={styles.cover}>
          <div className={styles.content}>
            <h1>Working at Serverless</h1>
            <h3>
              Build more and manage less. Join us in simplifying the way software is built.
            </h3>
          </div>
        </div>
        <div className={styles.content}>
          <div className={classnames(styles.positions, styles.marginTop)}>
            {this.state.isLoading ? <ContentLoading /> :
            <div>
              <Positions jobs={this.state.jobs} team='Growth' />
              <Positions jobs={this.state.jobs} team='Engineering' />
            </div>}
          </div>
        </div>
        <div className={styles.teamPhotos} />
        <div className={styles.black}>
          <div className={styles.content}>
            <h1>Our values</h1>
            <div className={styles.values}>
              <div>
                <h2>Serverless is a group project</h2>
                It takes the whole team working together to meet Serverless’ bold and ambitious goals. We help each other and strive to remove any roadblocks slowing our teammates down. We hold each other accountable and communicate expectations clearly through asynchronous communication (Slack, Github, Email) and ask for help when we need it.
              </div>
              <div>
                <h2>Focus on results</h2>
                It’s easy to get distracted when pioneering technology in a new space. We keep the team successful by setting clear goals that start at the company level and work their way down to each individual team member. We focus on results and celebrate success as a team.
              </div>
              <div>
                <h2>Blaze the trail</h2>
                As the first mover in the serverless space our team is bold and ambitious. We think outside the box and are always looking for ways to embrace new technology and make it accessible to our community.
              </div>
              <div>
                <h2>Open source forever</h2>
                The open source community is an integral strategy to our success. We will never forget where we came from and pledge to always give back.
              </div>
              <div>
                <h2>Keep it simple</h2>
                It’s easy to overly complicate language, code, and projects. We strive to create the most simple and elegant solutions. When communicating we ask, “How can I say this in five words instead of ten?”
              </div>
              <div>
                <h2>Work with freedom and responsibility</h2>
                Be a good teammate, honor your commitments, and strive to exceed all expectations. However you manage to do that is up to you.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={classnames(styles.center, styles.marginTop)}>
            Benefits and Perks
          </h1>
          <div className={styles.perks}>
            <div>
              <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/jobs/icons/perks-icon-1.svg' />
              Competitive salary and equity in well-funded high-growth company
            </div>
            <div>
              <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/jobs/icons/perks-icon-2.svg' />
              Generous healthcare, vision, and family leave policies
            </div>
            <div>
              <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/jobs/icons/perks-icon-3.svg' />
              Unlimited paid time off with a minimum requirement of unplugging for at least 20 days/ year
            </div>
            <div>
              <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/jobs/icons/perks-icon-4.svg' />
              Biannual team retreats (past retreats include Austria, Northern California, and Thailand)
            </div>
            <div>
              <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/jobs/icons/perks-icon-5.svg' />
              Remote friendly and flexible work schedule
            </div>
            <div>
              <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/jobs/icons/perks-icon-6.svg' />
              Culture of empowerment (our entire company, from processes to values, live in a Github repo that anyone can propose changes to)
            </div>
          </div>
        </div>
      </Default>
    )
  }
}
