---
title: 'Plugin Approved and Certified Criteria'
description:
  'Requirements for a community plugin to be classified as Approved or Certified'
layout: Learn
useLearnNav: false
---

To provide clarity on the requirements for a community plugin to be classified as Approved or Certified

### Introduction

In order to support our community, we want to show our appreciation to the plugin developers of the Serverless framework. One way to do that is to recognise specific plugins for the positive impact they have on the community as a whole. In addition, we would like to ensure that the broader community of developers using the Serverless Framework can confidently use specific plugins with the knowledge that the plugin will be maintained as needed into the future. It also means that we can directly support our clients on our [enterprise support packages](https://serverless.com/enterprise/) with plugins specifically confirmed to meet requirements that make it possible to provide this service.

### Becoming Community, Approved or Certified

In order to have a plugin considered for the various levels of support, the author make sure the criteria is met below and then complete the form at [https://forms.gle/zYMGSSpRUjdiGe2R6](https://forms.gle/zYMGSSpRUjdiGe2R6). Someone at Serverless will review the application and inform the author of the result; whether any criteria still need to be met and whether the status of the plugin within the plugin repo has or will be updated.

### Rewards

##### Community and Approved

- Allowed to display the appropriate Community or Approved badge on plugin documentation that links to the Serverless Plugin Explorer.
- Added to the “Plugin Authors” Serverless team on Github.

##### Certified

- Same rewards as for Community and Approved
- Invitation to the weekly open source sync meeting where release goals for Serverless Framework development are decided.

### Community Plugins

##### Documentation Requirements

A Community plugin has some basic documentation requirements for it to become recognised as such:

- Description - A summary of the plugin and its intended purpose.
- Table of Contents - A summary of each section of the Readme.
- Usage Requirements - Provides details as to the minimum requirements in order to make use of the plugin and MAY include:
  - Required node and npm versions
  - Required runtime version
  - Minimum version of the Serverless Framework required
  - Any dependency on any other plugin
  - Warning describing any effects on standard deployment process or effect on existing services deployed
- Installation Instructions - Provides instructions on how to install the plugin, and SHOULD include:
  - Basic instructions to install the Serverless Framework
  - Link to the Serverless Framework Getting Started Section
  - Instructions for installing the plugin
- Quick Start Instructions - Details a minimum required configuration for a basic version of the plugin to work and SHOULD contain a simple, inline example demonstrating usage of the plugin.

##### Miscellaneous Requirements

- Plugin MUST be added to the plugin list at [https://github.com/serverless/plugins](https://github.com/serverless/plugins).
- ISC compatible open source licence in place.

### Approved Plugins

An Approved plugin must satisfy all the criteria of a Community plugin as well as additional requirements below.

##### Response Time SLA

For enterprise customers on a support SLA, approved plugins will receive the contracted SLA time or 24 hours, whichever is longer

##### Documentation Requirements

An approved plugin MUST have clear, consistent documentation in the form of a Readme in the project repository. The following sections MUST be included in the documentation:

- Verification Badge - An approved badge, provided by Serverless, Inc., that links back to the Plugin Explorer on serverless.com to verify the plugin status.
- Feature Details - A reference section that describes each feature and its available options in detail:
  - Each feature is described in its sub-section in detail
  - Each feature includes relevant config or code snippet
  - A complete yaml reference providing an example of all possible configuration options for the plugin.
- Examples - Links to examples in the examples folder.
- Licence - A description of the plugin’s license.

##### Example Requirements

At least one example of the plugin usage, which meets the following criteria, is required:

- Examples must be kept within an “examples” folder in the repo
- Examples MUST have links to them from the root Readme
- Each example MUST have its own Readme providing instructions as to how to use the example and describing what it is demonstrating
- Multiple examples should be provided if there are multiple use cases that need to be covered
- All examples should be easily replicated by an end user
- All example code and configuration should be commented in a way that fully explains the plugin features being used

##### Testing Requirements

Basic tests must be in place, which meet the following criteria:

- MUST have 80% unit test coverage
- Coverage MUST include each feature it supports
- An integration test MUST exist that runs each example in the examples directory.

##### Miscellaneous Requirements

- A minimum of 1000 npm downloads per month.
- Releases follow semantic versioning
- 2 Business day response time SLA for reviewing pull requests from Serverless, Inc. employees.
- Plugin MUST be on the plugin list for at least 30 days to be considered as an approved plugin.

### Certified Plugins

##### Response Time SLA

For enterprise customers on a support SLA, certified plugins will receive the contracted SLA time or 12 hours, whichever is longer.

##### Criteria

In order for a plugin to become certified, it must satisfy all criteria for an Approved plugin plus the following requirements:

- Serverless, Inc. employees must be granted read and write access to the plugin repository.
- A plugin should remain in Approved status for at least 30 days to be considered as a Certified plugin.
- Continuous Integration/Continuous Delivery, meeting the following requirements, should be in place:
  - Master branch is a protected branch that cannot be pushed to directly
  - All changes must be submitted via pull request
  - Pull requests are only merged after at least ONE approving review
  - A CI/CD process must be configured to execute all unit tests after every merged pull request
  - Unit test coverage must not drop below 90%
  - Prior to every release, integration tests on examples should pass
  - CI/CD setup should push a new npm release triggered via Github tags to allow Serverless Inc to release new npm versions without needing access to npm
