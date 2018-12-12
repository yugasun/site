import logo99x from 'src/assets/images/pages/partners/99x-logo.png'
import kenzanLogo from 'src/assets/images/pages/partners/kenzan-logo.svg'
import dashbirdLogo from 'src/assets/images/pages/tech-partners/dashbird-logo.png'
import puresecLogo from 'src/assets/images/pages/tech-partners/puresec-logo.png'
import sinapsisLogo from 'src/assets/images/pages/partners/sinapsis-logo.png'
import iopipeLogo from 'src/assets/images/pages/tech-partners/iopipe-logo.png'
import epsagonLogo from 'src/assets/images/pages/tech-partners/epsagon-logo.png'
import seed from 'src/assets/images/pages/tech-partners/seed-logo.svg'
import codingSansLogo from 'src/assets/images/pages/partners/codingsans-logo.png'

export default [
        {
          name: "Seed",
          location: 'San Francisco, California',
          description: 'Seed manages pipelines, configures environments, and monitors deployments for Serverless Framework projects on AWS.',
          logo: {
            url: seed,
            bgHeight: '154px'
          },
          caseStudyLink: '',
          componentLink: '',
          websiteLink: 'https://www.seed.run/',
        },
        {
          name: "PureSec",
          location: 'Tel Aviv, Israel',
          description: 'PureSec is a global leader in serverless architectures security, enabling its customers to build and maintain secure and reliable serverless applications in a trusted and safe computing environment.',
          logo: {
            url: puresecLogo,
            bgHeight: '122px'
          },
          caseStudyLink: '',
          componentLink: '',
          websiteLink: 'https://www.puresec.io/',
        },
        {
          name: "IOpipe",
          location: 'Seattle, Washington',
          description: 'IOpipe is a cloud-based SaaS offering that offers tracing, profiling, metrics, logs, alerting and debugging tools to power up serverless operations and development teams.',
          logo: {
            url: iopipeLogo,
            bgHeight: '156px'
          },
          caseStudyLink: '',
          componentLink: '',
          websiteLink: 'https://www.iopipe.com/',
        },
        {
          name: "Dashbird",
          location: 'Tallinn, Harjumaa, Estonia',
          description: 'Dashbird brings end-to-end visibility into serverless architectures. You can monitor performance and cost of all functions, navigate and search large amounts of logs and dive into invocation level details with logs and traces. The service also detects cold starts, retries and all possible types of failures and lets you know through Slack, email or any third-party service reducing your mean time to resolution.',
          logo: {
            url: dashbirdLogo,
            bgHeight: '282px'
          },
          caseStudyLink: '',
          componentLink: '',
          websiteLink: 'https://dashbird.io/',
        },
        {
          name: "Epsagon",
          location: 'San Francisco, California',
          description: 'Epsagon is a serverless monitoring tool that monitors the entire application, beyond just the functions, to give organizations the ability to bridge the visibility and cost gaps across their serverless architectures. Because many modern applications are highly distributed with business workflows and data spread across multiple managed services and APIs, measuring performance and cost at the server level is often not enough. With the use of distributed tracing and artificial intelligence technologies, Epsagon provides organizations with the ability to gain deeper insights into application performance and rapidly remediate bottlenecks.',
          logo: {
            url: epsagonLogo,
            bgHeight: '161px'
          },
          caseStudyLink: '',
          componentLink: '',
          websiteLink: 'https://epsagon.com/',
        },
]
