module.exports = {
  '/framework/docs/': {
    'index': [
      {
        'path': '/framework/docs/index',
        'title': 'Docs',
        'order': 5
      }
    ],
    'children': [
      {
        'path': '/framework/docs/guide',
        'title': 'Guide',
        'order': 1
      },
      {
        'path': '/framework/docs/providers',
        'title': 'Providers',
        'order': 2
      },
      {
        'path': '/framework/docs/cli-reference',
        'title': 'Cli reference',
        'order': 3
      },
      {
        'path': '/framework/docs/extending-serverless',
        'title': 'Extending serverless',
        'order': 4
      },
      {
        'path': '/framework/docs/framework-statistics',
        'title': 'Framework statistics',
        'order': 5
      },
      {
        'path': '/framework/docs/v0-v1-comparison',
        'title': 'Comparison between 0.x and 1.x',
        'order': 5
      }
    ]
  },
  '/framework/docs/cli-reference': {
    'index': [
      {
        'path': '/framework/docs/cli-reference/index',
        'title': 'CLI Reference',
        'order': 3
      }
    ],
    'children': [
      {
        'path': '/framework/docs/cli-reference/create',
        'title': 'Create',
        'order': 1
      },
      {
        'path': '/framework/docs/cli-reference/install',
        'title': 'Install',
        'order': 2
      },
      {
        'path': '/framework/docs/cli-reference/deploy',
        'title': 'Deploy',
        'order': 3
      },
      {
        'path': '/framework/docs/cli-reference/invoke',
        'title': 'Invoke',
        'order': 4
      },
      {
        'path': '/framework/docs/cli-reference/logs',
        'title': 'Logs',
        'order': 5
      },
      {
        'path': '/framework/docs/cli-reference/info',
        'title': 'Info',
        'order': 6
      },
      {
        'path': '/framework/docs/cli-reference/remove',
        'title': 'Remove',
        'order': 7
      },
      {
        'path': '/framework/docs/cli-reference/slstats',
        'title': 'Stats',
        'order': 8
      }
    ]
  },
  '/framework/docs/extending-serverless': {
    'index': [
      {
        'path': '/framework/docs/extending-serverless/index',
        'title': 'Developing plugins',
        'order': 4
      }
    ],
    'children': [
      {
        'path': '/framework/docs/extending-serverless/creating-plugins',
        'title': 'Building Plugins',
        'order': 1
      },
      {
        'path': '/framework/docs/extending-serverless/creating-provider-plugins',
        'title': 'Building Provider Integrations',
        'order': 2
      }
    ]
  },
  '/framework/docs/guide': {
    'index': [
      {
        'path': '/framework/docs/guide/index',
        'title': 'Getting Started',
        'order': 1
      }
    ],
    'children': [
      {
        'path': '/framework/docs/guide/installing-serverless',
        'title': 'Installation',
        'order': 1
      },
      {
        'path': '/framework/docs/guide/creating-services',
        'title': 'Creating Services',
        'order': 2
      },
      {
        'path': '/framework/docs/guide/deploying-services',
        'title': 'Deploying Services',
        'order': 3
      },
      {
        'path': '/framework/docs/guide/invoking-functions',
        'title': 'Invoking Services',
        'order': 4
      },
      {
        'path': '/framework/docs/guide/event-sources',
        'title': 'Setting up Events',
        'order': 5
      },
      {
        'path': '/framework/docs/guide/custom-provider-resources',
        'title': 'Creating custom resources',
        'order': 6
      },
      {
        'path': '/framework/docs/guide/removing-services',
        'title': 'Removing Services',
        'order': 7
      },
      {
        'path': '/framework/docs/guide/serverless-variables',
        'title': 'Using Variables',
        'order': 8
      },
      {
        'path': '/framework/docs/guide/installing-plugins',
        'title': 'Installing Plugins',
        'order': 9
      },
      {
        'path': '/framework/docs/guide/packaging',
        'title': 'Packaging Services',
        'order': 10
      },
      {
        'path': '/framework/docs/guide/environment-variable-handling',
        'title': 'Packaging Services',
        'order': 11
      },
      {
        'path': '/framework/docs/guide/serverless-yml-reference',
        'title': 'Serverless.yml reference',
        'order': 12
      }
    ]
  },
  '/framework/docs/providers': {
    'index': [
      {
        'path': '/framework/docs/providers/index',
        'title': 'Serverless Providers',
        'order': 2
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws',
        'title': 'Aws',
        'order': 0
      }
    ]
  },
  '/framework/docs/providers/aws': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/index',
        'title': 'AWS Documentation',
        'order': 2
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/events',
        'title': 'Events',
        'order': 0
      },
      {
        'path': '/framework/docs/providers/aws/examples',
        'title': 'Examples',
        'order': 0
      },
      {
        'path': '/framework/docs/providers/aws/setup',
        'title': 'AWS Authentication Setup',
        'order': 1
      },
      {
        'path': '/framework/docs/providers/aws/iam',
        'title': 'IAM Role configuration',
        'order': 2
      },
      {
        'path': '/framework/docs/providers/aws/vpc',
        'title': 'VPC Configuration',
        'order': 3
      },
      {
        'path': '/framework/docs/providers/aws/resource-names-reference',
        'title': 'Cloudformation Resource Reference',
        'order': 4
      }
    ]
  },
  '/framework/docs/providers/aws/events': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/events/index',
        'title': 'AWS Events',
        'order': 2
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/events/apigateway',
        'title': 'API Gateway Event config',
        'order': 1
      },
      {
        'path': '/framework/docs/providers/aws/events/s3',
        'title': 'S3 Event config',
        'order': 2
      },
      {
        'path': '/framework/docs/providers/aws/events/schedule',
        'title': 'AWS Schedule config',
        'order': 3
      },
      {
        'path': '/framework/docs/providers/aws/events/sns',
        'title': 'SNS Event config',
        'order': 4
      },
      {
        'path': '/framework/docs/providers/aws/events/streams',
        'title': 'DynamoDB / Kinesis Streams config',
        'order': 5
      }
    ]
  },
  '/framework/docs/providers/aws/examples': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/index',
        'title': 'AWS Lambda Examples',
        'order': 2
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/examples/cron',
        'title': 'Cron',
        'order': 0
      },
      {
        'path': '/framework/docs/providers/aws/examples/hello-world',
        'title': 'Hello world',
        'order': 0
      },
      {
        'path': '/framework/docs/providers/aws/examples/using-external-libraries',
        'title': 'Using external libraries',
        'order': 0
      },
      {
        'path': '/framework/docs/providers/aws/examples/web-serving-html',
        'title': 'Web serving html',
        'order': 0
      }
    ]
  },
  '/framework/docs/providers/aws/examples/cron': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/cron/index',
        'title': 'Scheduled Cron Example',
        'order': 2
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/examples/cron/node',
        'title': 'Node',
        'order': 0
      }
    ]
  },
  '/framework/docs/providers/aws/examples/cron/node': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/cron/node/index',
        'title': 'Scheduled Cron Example',
        'order': 2
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/hello-world': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/hello-world/index',
        'title': 'Hello World Example',
        'order': 2
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/examples/hello-world/node',
        'title': 'Node',
        'order': 0
      },
      {
        'path': '/framework/docs/providers/aws/examples/hello-world/python',
        'title': 'Python',
        'order': 0
      }
    ]
  },
  '/framework/docs/providers/aws/examples/hello-world/node': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/hello-world/node/index',
        'title': 'Hello World Node Example',
        'order': 2
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/hello-world/python': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/hello-world/python/index',
        'title': 'Hello World Python Example',
        'order': 2
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/using-external-libraries': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/using-external-libraries/index',
        'title': 'Using External Libraries',
        'order': 2
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/examples/using-external-libraries/node',
        'title': 'Node',
        'order': 0
      }
    ]
  },
  '/framework/docs/providers/aws/examples/using-external-libraries/node': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/using-external-libraries/node/index',
        'title': 'External libraries in Node.js service',
        'order': 2
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/web-serving-html': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/web-serving-html/index',
        'title': 'Serving HTML',
        'order': 2
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/examples/web-serving-html/node',
        'title': 'Node',
        'order': 0
      }
    ]
  },
  '/framework/docs/providers/aws/examples/web-serving-html/node': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/web-serving-html/node/index',
        'title': 'Serving Static HTML',
        'order': 2
      }
    ],
    'children': []
  }
}
