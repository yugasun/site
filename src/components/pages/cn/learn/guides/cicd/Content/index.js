import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'
import styles from './content.module.css'
import { ExternalLink } from 'src/fragments'

import outputsImage from 'src/assets/images/pages/learn/guides/cicd/outputs.png'
import outputsScreenImage from 'src/assets/images/pages/learn/guides/cicd/outputs-screen.png'
import previewScreenImage from 'src/assets/images/pages/learn/guides/cicd/preview-screen.png'
import workflowSimpleImage from 'src/assets/images/pages/learn/guides/cicd/workflow-single.png'
import sharedImage from 'src/assets/images/pages/learn/guides/cicd/shared.png'
import profilesImage from 'src/assets/images/pages/learn/guides/cicd/profiles.png'
import stagesImage from 'src/assets/images/pages/learn/guides/cicd/stages.png'
import envsImage from 'src/assets/images/pages/learn/guides/cicd/envs.png'
import workflowSingleSimpleImage from 'src/assets/images/pages/learn/guides/cicd/workflow-single-simple.png'
import { ImageWithShadow as Image } from 'src/fragments'

const Content = props => (
  <Flex flexDirection='column'>
    <div className={styles.guideContainer}>
      <Heading.h1 className={styles.heading1}> Serverless CI/CD Workflow</Heading.h1>

      <P0>There are many options for creating a CI/CD workflow for a Serverless Framework project, and there are
        countless services and tools that can help. In this guide we define what we consider to be best practices for
        serverless development workflows, based on our own, internal practices and learnings, and detail how these
        practices can be easily set up using the Serverless CI/CD solution available in Serverless Framework Pro.</P0>


      <Heading.h4 className={styles.heading4}>Table of content</Heading.h4>
      <P0 id='toc'>
        <ul>
          <li><a href='#about' style={{color: 'inherit'}}>About Serverless CI/CD</a></li>
          <li><a href='#requirements' style={{color: 'inherit'}}>Requirements</a></li>
          <li><a href='#solution' style={{color: 'inherit'}}>Solution overview</a></li>
          <li><a href='#example' style={{color: 'inherit'}}>Example application - workshop full-stack app</a></li>
          <li><a href='#workflow' style={{color: 'inherit'}}>Four-step development workflow</a></li>
          <li><a href='#organizing' style={{color: 'inherit'}}>Organizing your repo, apps and services</a></li>
          <li><a href='#implementing' style={{color: 'inherit'}}>Implementing the recommended workflow</a></li>
        </ul>
      </P0>

      <Heading.h2 className={styles.heading2} id='about'>About Serverless CI/CD</Heading.h2>

      <P0>Serverless CI/CD is a service built into Serverless Framework Pro. Like traditional CI/CD services, you can
        use it to run tests and deploy Serverless Framework services. Unlike traditional CI/CD services,  Serverless
        CI/CD is optimized for serverless architectures and requires little configuration.</P0>
      
      <P0>You can get started with the free tier of Serverless Framework Pro, which includes everything you need to run
        Serverless CI/CD and one concurrent build for Serverless CI/CD. </P0>

      <P0>
        <strong>
          <ExternalLink to={'https://dashboard.serverless.com/'} style={{color: 'inherit'}}>Signup for a free Serverless
          Framework Pro account here</ExternalLink>
        </strong>
      </P0>

      <Heading.h2 className={styles.heading2} id='requirements'>Requirements</Heading.h2>

      <P0>These are the things we want from our CI/CD Workflow:</P0>

      <P0>
        <ul>
          <li><strong>Break Up Your Apps</strong> - Always seek to break up your Application into smaller Services, to
          safely separate the cloud resources they contain. This way, we're not risking the entire Application if the
          deployment of a Service should fail or fall into an erroneous state, and we're not making a monolith that is
          hard to approach, collaborate on and maintain. When determining how to separate your Services, seek to
          generally group cloud resources by their business domain while specifically separating cloud resources that
          you deploy often (e.g. code, functions) from resources that should be deployed infrequently and cautiously
          (e.g. databases, VPCs)</li>
          <li><strong>Autonomy & Sharing</strong> – The developers must be able to work on features separately from the
          entire application, so they can work fast due to the increased autonomy.  At the same time, most serverless
          and cloud architectures consist of many shared resources. Therefore, our developers must also be able to
          interact with other resources (e.g. a database, auth, VPC) without too much friction.</li>
          <li><strong>Develop and Review In The Cloud</strong> – Encourage developers to work in the real cloud
          environment as much as possible, to ensure they understand the performance and limitations of their cloud
          services and experience what end-users will experience.. Developers should deploy and test before committing
          their changes to git and pull request reviewers should be reviewing the end-user experience in a real cloud
          environment. They can use offline when they feel the need, but the workflow should make it easy for developers
          to do the majority of their work in the cloud, without getting blocked or colliding their infrastructure.</li>
          <li><strong>Traditional Staging & Production</strong> – A traditional Staging copy of the Application and a
          traditional Production copy of the Application, that are separate from all development.  Staging will be for
          testing and feedback, and Production will be for end-users.</li>
        </ul>
      </P0>

      <Heading.h2 className={styles.heading2} id='solution'>Solution overview</Heading.h2>

      <P0>We’ll dive into all the details of the entire workflow end to end, but before we do, let's have a look at a
        high level how we will address the requirements listed above.</P0>

      <P0>
        <ul>
          <li>We’ll <strong>Break Up our Apps</strong> with an example application, the workshop full-stack app, which
          consists of four Serverless Framework Services. The Services are organized in different sub directories of the
          same repository and application. These services are organized per the recommendations for organizing your
          repos, apps, and services.</li>
          <li>Enable <strong>Autonomy and Sharing</strong> by breaking up the shared resources from the other resources
          per the recommendations for organizing your repos, apps, and services. These Services can be worked on and
          deployed independently of the shared resources, enabling developers to frequently deploy from the CLI. They’ll
          be able to share resources across Services using outputs without having to redeploy their dependent shared
          services.</li>
          <li>Enable developers to <strong>Develop and Review In The Cloud</strong> by deploying from the CLI before
          committing their changes. Using Serverless CI/CD we’ll be able to automatically create preview deployments of
          the changes in our pull requests. This enables the reviewers to use a preview instance of the service from the
          pull request. Once reviewed, these preview deployments will be cleaned up automatically.</li>
          <li><strong>Traditional Staging & Production</strong> steps are included as the last two steps of the
          four-step workflow. Using Serverless CI/CD changes to the master branch are automatically deployed to the
          staging environment. Once reviewed, they can be promoted and rolled back from staging to production using a
          git workflow. We encourage frequent but small deployments to production using feature flagging to decouple
          deployments from releases.</li>
        </ul>
      </P0>

      <Heading.h2 className={styles.heading2} id='example'>Example application - workshop full-stack app</Heading.h2>

      <P0>To illustrate the four steps of the CI/CD workflow and the related concepts, we’ll use the workshop full-stack
        application as an example. The workshop app is open source and available on Github at
        https://github.com/skierkowski/workshop.</P0>

      <P0>This workshop application has four different microservices; however, we’ll focus only on the three backend API
        services, <strong>fullstack-database</strong>, <strong>fullstack-tasks</strong> and
        <strong>fullstack-restapi</strong> services which can be found in the <code>/backend-database</code>,
        <code>/backend-tasks</code>, and <code>/backend-restapi</code> subdirectories respectively. Each of these
        directories contains a <code>serverless.yml</code>.</P0>

      <P0>
        <ul>
          <li><strong>fullstack-database</strong> - This is a simple service which provisions an AWS DynamoDB Table. It
          defines two custom variables, <code>database_submissions_region</code> and
          <code>database_submissions_name</code> which are used to provision the DynamoDB Table. These variables are
          later referenced in the outputs section, which uses the outputs feature to published the value and make it
          available to other services for consumption.</li>
          <li><strong>fullstack-restapi</strong> - A REST API with a single Lambda function and an http event listener
          using the API Gateway. This service consumes the outputs from the <strong>fullstack-database</strong> service
          and uses them to set environment variables on the lambda function and to setup IAM role for the Lambda
          function to access they DynamoDb Table. The lambda functions use the environment variables to access the
          DynamoDB Table.</li>
          <li><strong>fullstack-tasks</strong> - This service invokes a lambda function on a 5 minute interval. The
          lambda function uses the environment variable <code>url</code> and <code>api_key</code>. Those environment
          variables are set using the <code>${'{param}'}</code> variable, which are obtained from the Serverless
          Framework Pro dashboard.</li>
        </ul>
      </P0>

      <Heading.h2 className={styles.heading2} id='workflow'>Four-step development workflow</Heading.h2>

      <Image src={workflowSingleSimpleImage} />

      <P0>The workflow is split into four steps of the deployment lifecycle. To describe this workflow we will use the
        <strong>fullstack-restapi</strong> services from the workshop fullstack app as an example.</P0>

      <P0>In order to meet the requirements we’ve laid out for our team, this is the workflow we’ll design to meet those
        requirements:</P0>

      <Heading.h3 className={styles.heading3}>Develop</Heading.h3>

      <P0>While a developer is working locally in their terminal and IDE, they will use local emulators when feasible.
        However, they should be encouraged to deploy to real cloud services often to get a more realistic view of their
        service.</P0>

      <P0>Developers will deploy their application frequently to test out using real-world resources. They will do this
        before committing their code or making a pull request. They’ll likely run integration tests on the deployed
        services before committing the code.</P0>

      <Heading.h3 className={styles.heading3}>Review</Heading.h3>

      <P0>Once the developer is happy with their code they will commit it and open a pull request in Github. As a part
        of the review process, it is helpful for other developers to see the test results and get a live preview of the
        new feature. Therefore we’ll setup Serverless CI/CD to automatically test and deploy pull requests.</P0>

      <Heading.h3 className={styles.heading3}>Stage</Heading.h3>

      <P0>Once the pull request is reviewed and approved, it’ll be merged into the master branch and the pull request
        branch will be deleted. Given that we have a traditional model of deploying to staging before production, we’ll
        setup our Serverless CI/CD to automatically deploy changes from the master branch to our staging environment and
        stage.</P0>

      <P0>This is a good time for product owners to review the changes before they are deployed to production. As
        described later, all changes should be feature flagged when possible. Upon review, the product owner may provide
        additional feedback and requests. If the changes can be promoted to production safely behind a feature flag,
        they should, even if the feedback hasn’t been addressed. The feedback then can be added and go through the
        review cycle again. If the changes can’t be deployed to production safely behind a feature flag, only then,
        should they be reverted.</P0>

      <Heading.h3 className={styles.heading3}>Release</Heading.h3>

      <P0>Finally we want to take the service live by releasing it. We will promote our changes from staging to
        production by merging our changes from the master branch to the prod branch. The prod branch will be configured
        to automatically deploy to the prod AWS account and stage. It might be tempting to do bulk deployments on a
        cadence that matches our sprints, e.g. every two weeks, but we encourage frequent promotions from staging to
        production. In conjunction to frequent promotions from staging to production we also encourage using feature
        flagging, testing in production, then releasing by switching a feature flag.</P0>

      <Heading.h2 className={styles.heading2} id='organizing'>Organizing your repo, apps and services</Heading.h2>

      <P0>In a growing serverless team it can be difficult to figure out how your applications, services and
        repositories should be organized for collaboration and growth. Here are a few guidelines you can follow to help
        organize your repos, apps and services. These are just rules-of-thumb, so you will need to evaluate your
        organization and consider the trade-offs. If needed, Serverless, Inc. provides architectural reviews, and we
        also have trusted partners who can help too.</P0>

      <P0>
        <ul>
          <li><strong>Any shared resources which rarely change should be separated into its own Serverless Framework
            serverless.yml</strong>. For example, databases, DyanamoDB table, Cognito User Pools, are often shared by
            other services, but that are rarely modified and deployed. These should be deployed independently using
            their own <code>serverless.yml</code> file. In the workshop application, the
            <strong>fullstack-database</strong> service is an example of one such service.</li>
          <li><strong>Any service which can be deployed independently should be separated into its own Serverless
            Framework serverless.yml</strong>. Large <code>serverless.yml</code> have numerous limitations.
            <ul>
              <li>Serverless Framework depends on CloudFormation which has hard limits on the number of resources it can
                provision in a single deployment.</li>
              <li>Some services also take longer to deploy than others, so larger deployment stacks will take longer to
                deploy, even if the change is small.</li>
              <li>Also, <code>serverless.yml</code> files can get hard to read if there are too many plugins and
              resources.</li>
            </ul>
            <br/>
            As such, each service should be separated into its own <code>serverless.yml</code> if it can be deployed
            independently of other services. For example, in the workshop full stack application, the fullstack-frontend
            service is its own <code>serverless.yml</code> because it can be developed and deployed independently of any
            other services.
            </li>
          <li><strong>Use one repo per service if the service can be developed and deployed independently of other
            services</strong>. If a developer or a team works on a service and the changes they work are typically
            isolated from other changes, then it should be separated into its own repository to provide finer grained
            access controls and an independent lifecycle.</li>
          <li><strong>Use one mono repo per application if features span multiple services</strong>. For example, you
          may introduce a new feature which requires updating the front end and backend service. In this case, the two
          services are a part of one application. A single pull request for the feature may include updates to multiple
          services and both must be deployed.</li>
          <li><strong>Use a mono repo with multiple services, if they share a common code base</strong>. For example, if
          you have a REST API service and an AppSync service both of which use the same client libraries, they should be
          organized in the same repository with three different directories, one for the AppSync service(e.g.
          <code>/appsync-service</code>), one for the REST API Service (e.g. <code>/restapi-service</code>), and one for
          the shared libraries (e.g. <code>/shared</code>)</li>
        </ul>
      </P0>


      <Heading.h2 className={styles.heading2} id='implementing'>Implementing the recommended workflow</Heading.h2>

      <Heading.h3 className={styles.heading3}>Setup deployment environments</Heading.h3>

      <Image src={envsImage} />

      <P0>Before we define and automate our workflow, we must first create all of our deployment environments and setup
        the corresponding service accounts for each environment. As per our requirements, we want to isolate our staging
        and production environments from each other and from other environments.</P0>

      <P0>For each environment we’ll create a separate AWS Account so we can manage access to each independently and
        isolate the services from one another. Consult the AWS Multiple Account Billing Strategy guide for more
        considerations in choosing the right environment isolation strategy for your organization</P0>

      <P0>We’ll also likely use other 3rd party APIs, like Stripe for payments. In which case, we’ll want to make sure
        that we manage each of those accounts independently for each environment.</P0>

      <P0>While the deployment workflow has four stages, development, review, staging, and production, we only need
        three environments. Staging and production must have their own environment, while we can share an environment
        during development and review. With this setup we’ll end up with three environments:</P0>

      <P0>
        <ul>
          <li><strong>development</strong> - used during development and review</li>
          <li><strong>staging</strong> - exclusively used during staging</li>
          <li><strong>prod</strong> - exclusively used for releasing to production</li>
        </ul>
      </P0>


      <Heading.h4 className={styles.heading4}>Create AWS account per environment</Heading.h4>

      <P0>We will create one AWS account for each environment, so the AWS accounts will be development, staging, and
        prod. Each AWS Account requires billing information which can be cumbersome to manage. To make this a little
        easier AWS provides managed accounts in organizations so you can have multiple accounts in a single organization
        with a single payment account and bill.</P0>

      <P0>Follow these steps provided by AWS for creating the three AWS Accounts for each environment.</P0>
      <P0>https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html#orgs_manage_accounts_create-new</P0>

      <Heading.h4 className={styles.heading4}>Create other service accounts per environment</Heading.h4>

      <P0>While AWS provides a broad range of services, it is also likely that your service depends on other third party
        services like Stripe for payments, SendGrid for email delivery, Sentry for exception tracking and much more.</P0>

      <P0>Just the same way we isolate each of our deployment environments between development, staging and production,
        we should also isolate our dependencies for each environment. For each of these third party services you should
        setup separate accounts or isolated environments, and generate independent set of credentials (e.g. API Keys)
        for each.</P0>

      <P0>Separate accounts for each environment may be cost prohibitive or cumbersome depending on the service. If
        separate accounts aren’t feasible, consider using a naming scheme to the provisioned resources with a prefix for
        each environment (e.g. <code>myservice-dev</code>).</P0>

      <Heading.h4 className={styles.heading4}>Use deployment profiles to manage environments</Heading.h4>

      <P0>Deployment Profiles is a feature of Serverless Framework Pro which enables us to associate AWS accounts,
        safeguards and parameters with different environments. We will create three Deployment Profiles, one for each
        environment, and we’ll use that to associate our AWS accounts and parameters with each.</P0>

      <Image src={profilesImage} />

      <Heading.h5 className={styles.heading5}>Add AWS access role for each AWS account</Heading.h5>

      <P0>Follow these instructions to link your AWS Account to the deployment profiles. Generate one AWS Access Role
        per AWS Account, and link it to the corresponding deployment profile.</P0>

      <P0>With AWS Access Roles the AWS Access Keys are generated by Serverless Framework on every command and the
        credentials expire after one hour. This enables you to deploy from the CLI without having to manage the AWS
        credentials and it enables Serverless CI/CD to deploy to your AWS account.</P0>

      <Heading.h5 className={styles.heading5}>Add parameters for each 3rd-party account</Heading.h5>

      <P0>The parameters documentation provides instructions for associating key/value pairs with a deployment profile.
        For each third party account generate the credentials and save them in Parameters. If you are familiar with AWS
        SSM, this is a very similar process; however, Serverless parameters make it much easier to manage and access
        those parameters.</P0>

      <P0>In our workshop example we’ve defined two parameters, endpoint and endpoint_api_key, the former is a URL and
        the latter is an API Key which we should consider to be sensitive. In a real-world case, you would have
        parameters to store parameters for your dependent services, like a API keys, endpoint addresses, database URIs,
        etc.</P0>

      <pre><code>
      {"provider:"}<br/>
      {"  environment:"}<br/>
      {"    url: ${'{param:endpoint}'}"}<br/>
      {"    api_key: ${'{param:endpoint_api_key}'}"}<br/>
      </code></pre>


      <P0>
        <table>
          <tr>
            <th>stage</th>
            <th>endpoint_url</th>
            <th>endpoint_api_key</th>
          </tr>
          <tr>
            <td>dev</td>
            <td>https://serverless-workshop-dev.free.beeceptor.com</td>
            <td>23423-dev</td>
          </tr>
          <tr>
            <td>staging</td>
            <td>https://serverless-workshop-staging.free.beeceptor.com</td>
            <td>54325-staging</td>
          </tr>
          <tr>
            <td>prod</td>
            <td>https://serverless-workshop-prod.free.beeceptor.com</td>
            <td>23569-prod</td>
          </tr>
        </table>
      </P0>


      <P0>You’ll be able to use those keys in your <code>serverless.yml</code> using
      <code>${'{param:endpoint_api_key}'}</code> and <code>${'{param:endpoint}'}</code>.</P0>

      <P0>When the service is deployed those parameters are resolved to the values from the deployment profile
        corresponding to the stage. For example, when you deploy to staging the
        <code>${'{param:endpoint_api_key}'}</code> will resolve to <code>54325-staging</code> and when you deploy to
        production it’ll resolve to <code>23569-prod</code>.</P0>

      <Heading.h5 className={styles.heading5}>Add env parameter to deployment profiles</Heading.h5>

      <P0>In each of the three deployment profiles, add a parameter named <code>env</code> and give it the corresponding
      names <code>dev</code>, <code>staging</code>, and <code>prod</code>. We will use this later when accessing outputs
      across different stages.</P0>

      <Heading.h5 className={styles.heading5}>Add stages to applications using the deployment profiles</Heading.h5>

      <Image src={stagesImage} />

      <P0>Now that we have the deployment profiles configured, we need to configure the applications and stages to use
        those profiles.</P0>

      <P0>Go to the <strong>settings</strong> tab in your application details view and add three stages, dev, staging,
      and prod. In each, set the profile to the corresponding name, e.g. dev => profile-dev. Adding this mapping will
      automatically load the AWS Access Role, Parameters and Safeguards from the deployment profile when you deploy. </P0>

      <P0>Additionally, set the default profile to <code>profile-dev</code>. When you deploy to a stage other than
      <code>dev</code>, <code>staging</code>, <code>prod</code>, then the default profile will be used. </P0>

      
      <Heading.h3 className={styles.heading3}>Using stages for developing changes</Heading.h3>

      <Image src={workflowSimpleImage} width={['90%', '90%', '90%', '60%', '60%', '60%']}/>

      <P0>Serverless Framework stages enable us to namespace our deployments such that we can deploy a service
        side-by-side in the same AWS Account and region without conflicting the names. We’ll use unique stage names
        during development and review to avoid conflicts, while still using the same AWS Account.</P0>

      <P0>When working locally and developing locally, before committing our code, we’ll deploy to a stage called
        <code>developer-name</code>, our username. Later, we’ll use the branch name as the stage name when deploying a
        preview deployment. In both cases, they are deployed using the same deployment profile and therefore using the
        same AWS Access Role and parameters.</P0>

      <Heading.h3 className={styles.heading3}>Sharing resources using outputs</Heading.h3>

      <P0>When developing Serverless Framework applications, we often have a set of shared resources we use across other
        services. In our example workshop app we have a service called <strong>fullstack-database</strong> which
        provisions a DynamoDB Table and we have a <strong>fullstack-restapi</strong> service which requires access to
        the table created by fullstack-database. In this context, the <strong>fullstack-database</strong> is a shared
        resource used by other service, fullstack-restapi. In the real-world, there would be other services which depend
        on fulsltack-database.</P0>

      <P0>This type of architecture often results in bundling all of those services in a single mono service deployed
        using a single <code>serverless.yml</code>. This leads to some challenges like having to redeploy large Cloud
        Formation stacks, massive hard-to-read <code>serverless.yml</code> files, etc.</P0>

      <P0>To address this issue we recommend using outputs to decouple each of these services into their own
        <code>serverless.yml</code> file. The shared service, fullstack-database, outputs key/values which then can be
        consumed by other services like fullstack-restapi. This enables us to develop and deploy each service
        independently. Now you can work on <strong>fullstack-restapi</strong> without having to touch or redeploy
        fullstack-database.</P0>

      <P0>To get started we need to create one instance of our shared resources, fullstack-database, per account - dev,
        stage, prod. The dependent services, fullstack-restapi, will use the outputs from
        <strong>fullstack-database</strong> in each account. During development and review the 
        <strong>fullstack-restapi</strong> will be deployed using the same deployment profile and AWS account; however,
        the stage names will be different.</P0>

      <Heading.h4 className={styles.heading4}>Publishing outputs from fullstack-database</Heading.h4>

      <P0>First we need to setup <strong>fullstack-database</strong> to publish the outputs when it is deployed. This is
      a snippet from the <code>serverless.yml</code> which shows how <strong>fullstack-database</strong> defines the
      outputs <code>database_submissions_name</code> and <code>database_submissions_region</code>. </P0>

      <pre><code>
      {"custom: # Centralize variables here"}<br/>
      {"  stage: ${'{opt:stage, self:provider.stage}'}"}<br/>
      {"  database_submissions_name: submissions-${'{self:custom.stage}'}"}<br/>
      {"  database_submissions_region: submissions-${'{self:provider.region}'}"}<br/>
      <br/>
      {"outputs:"}<br/>
      {"  database_submissions_name: ${'{self:custom.database_submissions_name}'}"}<br/>
      {"  database_submissions_region: ${'{self:custom.database_submissions_region}'}"}<br/>
      </code></pre>

      <P0>When <strong>fullstack-restapi</strong> is deployed, it identifies the values from fullstack-database, and
      sets them at deployment time. Upon deployment, you’ll see these in the service instance view in the
      dashboard.</P0>

      <Image src={outputsScreenImage}/>

      <Heading.h4 className={styles.heading4}>Consuming outputs in fullstack-restapi</Heading.h4>

      <P0>Now that <strong>fullstack-database</strong> is deployed, the outputs are published to the dashboard, and made
      available to all other services. In <strong>fullstack-restapi</strong> we can now use the ${'{output}'} variable
      to get the values of those outputs from <strong>fullstack-database</strong> and set them as environment variables
      on our lambda functions.</P0>

      <pre><code>
      {"provider:"}<br/>
      {"  environment:"}<br/>
      {"    database_submissions_name: ${'{output:fullstack-database.database_submissions_name}'}"}<br/>
      {"    database_submissions_region: ${'{output:fullstack-database.database_submissions_region}'}"}<br/>
      </code></pre>

      <P0>Once both services are deployed, this is how the values of the outputs are passed within the
        <code>serverless.yml</code> and across services.</P0>

      <Image src={sharedImage} width={['90%', '90%', '90%', '60%', '60%', '60%']}/>

      <Heading.h4 className={styles.heading4}>Consuming outputs in <strong>fullstack-restapi</strong> across stages</Heading.h4>

      <P0>By default, when the ${'{output}'} variable is used, it gets the value from the dependent service in the same
      app, stage, and region as the current service. In our stage and prod environments this will work as-is; however,
      this default behavior will not work if the stages do not match.</P0>

      <P0>When deploying <strong>fullstack-restapi</strong> in development we use our username as the stage name and
      when deploying in review we use the branch name as stage name. In both of these cases the stage of
      <strong>fullstack-restapi</strong> (e.g. <code>developer-name</code> and <code>new-feature-one</code>) will not
      match the stage of <strong>fullstack-database</strong> (<code>dev</code>). </P0>

      <Image src={outputsImage}/>

      <P0>Luckily, there is a nice solution. Earlier we defined a parameter called <code>env</code> in our three
      different deployment profiles. This means we can use the <code>${'{param:env}'}</code> variable to get the values
      <code>dev</code>, <code>stage</code>, and <code>prod</code> for each respective deployment profile</P0>

      <P0>This is the original default syntax we use to reference the output <code>database_submissions_name</code> from 
      fullstack-database.</P0>

      <pre><code>
        ${'{output:fullstack-database.database_submissions_name}'}
      </code></pre>

      <P0>We’ll replace it the extended syntax which allows us to reference outputs from different applications, stages,
        and regions.</P0>

      <pre><code>
        ${'{output:<app>:<stage>:<region>:<service>.<output_key>}'}
      </code></pre>

      <P0>We will now use our ${'{param:env}'}, which we previously defined in our deployment profiles, to replace the
      value of the stage in the ${'{output}'} variable.</P0>

      <pre><code>
        ${'{output::${param:env}::fullstack-database.database_submissions_name}'}
      </code></pre>

      <P0>Now when we deploy, the value of <code>${'{param:env}'}</code> is replaced with the value we defined in our
      deployment profile parameter.</P0>

      <P0>When deploying from the CLI during development using a stage name like developer-name, the deployment profile
        associated with the default stage is used, and therefore the <code>${'{param:env}'}</code> resolves to dev.
        Similarly, when deploying from CI/CD in review, then the branch name is used as the stage name, new-feature-one,
        which will also use the deployment profile associated with the default stage, and resolve
        <code>${'{param:env}'}</code> to <code>dev</code>.</P0>

      <Heading.h3 className={styles.heading3}>Deploying</Heading.h3>

      <Heading.h4 className={styles.heading4}>Development: deploying from the CLI</Heading.h4>
      
      <P0>As each developer works on a new feature locally, they should be encouraged to deploy their work frequently so
        they can test it with real cloud resources before making a commit. Once everything checks out, they can commit
        and make the pull request.</P0>

      <P0>When deploying during development, we want to make sure that one developer doesn’t overwrite the changes of
        another developer and their services should have access to other shared services. </P0>

      <pre><code>
        serverless deploy --stage developer
      </code></pre>

      <P0>One way to achieve this is to use the username as the stage name. This ensures that each developer deploys to
        a stage which doesn’t conflict with anybody else’s stage.</P0>

      <P0>The stage <code>developer</code> is not pre-configured in the <strong>stages</strong> section of the
      application, therefore the deployment will use the default deployment profile. The <code>development</code>
      deployment profile is used, therefore it is deployed to the development AWS account, and all the parameters
      associated with the <code>development</code> deployment profile are used.</P0>

      <Heading.h4 className={styles.heading4}>Preview: automatic deployments & clean up</Heading.h4>

      <P0>The second step on our workflow is to create a pull request of our feature branch against the master branch.
        We want to automatically run the unit tests and deploy a preview of this service.</P0>

      <P0>For each service in your application, go to the <strong>CI/CD Settings</strong> tab, and add this
      configuration to the <strong>Preview Deployments</strong> section.</P0>

      <Image src={previewScreenImage}/>

      <P0>Once this is configured and saved, we’ll have an automated review workflow. Each pull request will then run
        unit tests in Serverless CI/CD and then it will be deployed. Since we have the <strong>use branch name as
          stage</strong> option set, the service will be deployed to a stage using the branch name. For example, a
          feature branch feature-X will be deployed using <code>serverless deploy --stage feature-X</code>.</P0>

      <P0>The pull request status in Github will be updated with the deployment status and a link to the deployment
        details. Other developers can then use this information to assist them in reviewing the pull request. If they
        are working on an integration, they can also use this information to identify the API endpoints and test them
        with their services.</P0>

      <P0>We also have the <strong>Destroy stage and resources when branch is deleted</strong> option turned on. Once
      the pull request is reviewed and approved, it’ll be merged and deleted. When the branch is deleted, Serverless
      CI/CD will automatically destroy the deployment. Self clean up!</P0>

      <Heading.h4 className={styles.heading4}>Staging & Production: Branch deployments</Heading.h4>

      <P0>Setting up automatic deployments to staging and production is one of the easiest parts of the entire
        process.</P0>

      <P0>In your application go to the <strong>CI/CD Settings</strong> tab. For each service add the following
      configuration to the <strong>Branch Deployments</strong> section and save your changes.</P0>

      <P0>
        <table>
          <tr>
            <th>branch</th>
            <th>stage</th>
          </tr>
          <tr>
            <td>master</td>
            <td>staging (profile: staging)</td>
          </tr>
          <tr>
            <td>prod</td>
            <td>prod (profile: prod)</td>
          </tr>
        </table>
      </P0>


      <P0>Every commit to master and prod will be deployed to the staging and prod stages with the staging and prod 
        eployment profiles respectively after running the unit tests.</P0>

      <Heading.h3 className={styles.heading3}>Promotion & rollback with git</Heading.h3>

      <P0>The entire CI/CD workflow is tied to our activity in Github, this includes the workflow for promoting changes
        from one stage to the next, and rolling back a change in case of failure.</P0>

      <Heading.h4 className={styles.heading4}>Promoting from staging to production</Heading.h4>

      <P0>If everything in staging looks ok and ready to promote to production, we’ll use our git workflow to merge the
        desired commit from master to the prod branch. Since we already configured branch deployments for the prod
        branch, it will automatically run the tests and deploy to the prod stage.</P0>

      <Heading.h4 className={styles.heading4}>Handling roll-backs</Heading.h4>

      <P0>Just as before, we’ll use the git workflow to roll back a change. If you need to roll back a service, this too
        should be tied to the git flow. The roll back to a previous commit, you should create a new PR that reverts the
        initial merge commit. This is conveniently handled with the <code>revert</code> button in the Github Desktop
        app.</P0>

      <Heading.h3 className={styles.heading3}>Frequent releases with feature flags</Heading.h3>

      <P0>In our workflow we have a traditional model in which we stage changes in the staging environment before we
        push changes to production. In such a case it may be tempting to stack up changes in the staging environment
        before pushing the changes to production. When we are ready to release a feature we deploy to production.
        However, this is not a recommended pattern, instead, we have few other recommendations:</P0>

      <P0>
        <ul>
          <li>Make smaller more frequent commits and deploy them often to staging</li>
          <li>Promote the changes from staging to production often</li>
          <li>Each developer should be responsible for promoting their feature from staging to production. </li>
        </ul>
      </P0>

      <P0>To achieve the above requirements, your team must decouple the release process from the deployment process.
        That is, your team should be able to deploy features often, but not necessarily make them available to your
        users. This can only be achieved using feature flagging, the practice of deploying to production but controlling
        the features behavior, like visibility, via a toggle.</P0>

      <P0>Here are a few SaaS services which make feature flagging much easier:</P0>

      <P0>
        <ul>
          <li><a href='https://launchdarkly.com/' style={{color: 'inherit'}}>https://launchdarkly.com/</a> - used by Serverless Framework Pro</li>
          <li><a href='https://www.split.io/' style={{color: 'inherit'}}>https://www.split.io/</a></li>
          <li><a href='https://vwo.com/fullstack/' style={{color: 'inherit'}}>https://vwo.com/fullstack/</a></li>
        </ul>
      </P0>

    </div>
  </Flex>
)

export default Content
