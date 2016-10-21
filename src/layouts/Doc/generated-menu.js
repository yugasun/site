module.exports = {
  '/framework/docs/': {
    'index': [
      {
        'path': '/framework/docs/index',
        'title': 'Docs'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/cli-reference',
        'title': 'Cli reference',
        'order': 0
      },
      {
        'path': '/framework/docs/extending-serverless',
        'title': 'Extending serverless',
        'order': 0
      },
      {
        'path': '/framework/docs/framework-statistics',
        'title': 'Framework statistics'
      },
      {
        'path': '/framework/docs/guide',
        'title': 'Guide',
        'order': 0
      },
      {
        'path': '/framework/docs/providers',
        'title': 'Providers',
        'order': 0
      },
      {
        'path': '/framework/docs/v0-v1-comparison',
        'title': 'Comparison between 0.x and 1.x'
      }
    ]
  },
  '/framework/docs/cli-reference': {
    'index': [
      {
        'path': '/framework/docs/cli-reference/index',
        'title': 'CLI Reference'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/cli-reference/create',
        'title': 'Create'
      },
      {
        'path': '/framework/docs/cli-reference/deploy',
        'title': 'Deploy'
      },
      {
        'path': '/framework/docs/cli-reference/info',
        'title': 'Info'
      },
      {
        'path': '/framework/docs/cli-reference/install',
        'title': 'Install'
      },
      {
        'path': '/framework/docs/cli-reference/invoke',
        'title': 'Invoke'
      },
      {
        'path': '/framework/docs/cli-reference/logs',
        'title': 'Logs'
      },
      {
        'path': '/framework/docs/cli-reference/remove',
        'title': 'Remove'
      },
      {
        'path': '/framework/docs/cli-reference/slstats',
        'title': 'Stats'
      }
    ]
  },
  '/framework/docs/extending-serverless': {
    'index': [
      {
        'path': '/framework/docs/extending-serverless/index',
        'title': 'Developing plugins'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/extending-serverless/creating-plugins',
        'title': 'Building Plugins'
      },
      {
        'path': '/framework/docs/extending-serverless/creating-provider-plugins',
        'title': 'Building Provider Integrations'
      }
    ]
  },
  '/framework/docs/guide': {
    'index': [
      {
        'path': '/framework/docs/guide/index',
        'title': 'Getting Started'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/guide/installing-serverless',
        'title': 'Installation'
      },
      {
        'path': '/framework/docs/guide/creating-services',
        'title': 'Creating Services'
      },
      {
        'path': '/framework/docs/guide/deploying-services',
        'title': 'Deploying Services'
      },
      {
        'path': '/framework/docs/guide/environment-variable-handling',
        'title': 'Packaging Services'
      },
      {
        'path': '/framework/docs/guide/event-sources',
        'title': 'Setting up Events'
      },
      {
        'path': '/framework/docs/guide/installing-plugins',
        'title': 'Installing Plugins'
      },
      {
        'path': '/framework/docs/guide/custom-provider-resources',
        'title': 'Creating custom resources'
      },
      {
        'path': '/framework/docs/guide/invoking-functions',
        'title': 'Invoking Services'
      },
      {
        'path': '/framework/docs/guide/packaging',
        'title': 'Packaging Services'
      },
      {
        'path': '/framework/docs/guide/removing-services',
        'title': 'Removing Services'
      },
      {
        'path': '/framework/docs/guide/serverless-variables',
        'title': 'Using Variables'
      },
      {
        'path': '/framework/docs/guide/serverless-yml-reference',
        'title': 'Serverless.yml reference'
      }
    ]
  },
  '/framework/docs/providers': {
    'index': [
      {
        'path': '/framework/docs/providers/index',
        'title': 'Serverless Providers'
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
        'title': 'AWS Documentation'
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
        'path': '/framework/docs/providers/aws/iam',
        'title': 'IAM Role configuration'
      },
      {
        'path': '/framework/docs/providers/aws/resource-names-reference',
        'title': 'Cloudformation Resource Reference'
      },
      {
        'path': '/framework/docs/providers/aws/setup',
        'title': 'AWS Authentication Setup'
      },
      {
        'path': '/framework/docs/providers/aws/vpc',
        'title': 'VPC Configuration'
      }
    ]
  },
  '/framework/docs/providers/aws/events': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/events/index',
        'title': 'AWS Events'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/events/apigateway',
        'title': 'API Gateway Event config'
      },
      {
        'path': '/framework/docs/providers/aws/events/s3',
        'title': 'S3 Event config'
      },
      {
        'path': '/framework/docs/providers/aws/events/schedule',
        'title': 'AWS Schedule config'
      },
      {
        'path': '/framework/docs/providers/aws/events/sns',
        'title': 'SNS Event config'
      },
      {
        'path': '/framework/docs/providers/aws/events/streams',
        'title': 'DynamoDB / Kinesis Streams config'
      }
    ]
  },
  '/framework/docs/providers/aws/examples': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/index',
        'title': 'AWS Lambda Examples'
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
        'title': 'Scheduled Cron Example'
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
        'title': 'Scheduled Cron Example'
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/hello-world': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/hello-world/index',
        'title': 'Hello World Example'
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
        'title': 'Hello World Node Example'
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/hello-world/python': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/hello-world/python/index',
        'title': 'Hello World Python Example'
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/using-external-libraries': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/using-external-libraries/index',
        'title': 'Using External Libraries'
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
        'title': 'External libraries in Node.js service'
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/web-serving-html': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/web-serving-html/index',
        'title': 'Serving HTML'
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
        'title': 'Serving Static HTML'
      }
    ],
    'children': []
  }
}
