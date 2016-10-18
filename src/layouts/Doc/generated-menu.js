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
        'path': '/framework/docs/providers',
        'title': 'Providers',
        'order': 0
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
        'title': 'AWS'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/cli-reference',
        'title': 'Cli reference',
        'order': 0
      },
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
        'path': '/framework/docs/providers/aws/guide',
        'title': 'Guide',
        'order': 0
      }
    ]
  },
  '/framework/docs/providers/aws/cli-reference': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/cli-reference/index',
        'title': 'CLI Reference'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/cli-reference/create',
        'title': 'Create',
        'order': 1
      },
      {
        'path': '/framework/docs/providers/aws/cli-reference/install',
        'title': 'Install',
        'order': 2
      },
      {
        'path': '/framework/docs/providers/aws/cli-reference/deploy',
        'title': 'Deploy',
        'order': 3
      },
      {
        'path': '/framework/docs/providers/aws/cli-reference/invoke',
        'title': 'Invoke',
        'order': 4
      },
      {
        'path': '/framework/docs/providers/aws/cli-reference/logs',
        'title': 'Logs',
        'order': 5
      },
      {
        'path': '/framework/docs/providers/aws/cli-reference/info',
        'title': 'Info',
        'order': 6
      },
      {
        'path': '/framework/docs/providers/aws/cli-reference/remove',
        'title': 'Remove',
        'order': 7
      },
      {
        'path': '/framework/docs/providers/aws/cli-reference/slstats',
        'title': 'Serverless Stats',
        'order': 8
      }
    ]
  },
  '/framework/docs/providers/aws/events': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/events/index',
        'title': 'Events'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/events/apigateway',
        'title': 'API Gateway Event config',
        'order': 1
      },
      {
        'path': '/framework/docs/providers/aws/events/streams',
        'title': 'Kinesis & DynamoDB Streams',
        'order': 2
      },
      {
        'path': '/framework/docs/providers/aws/events/s3',
        'title': 'S3 Event config',
        'order': 3
      },
      {
        'path': '/framework/docs/providers/aws/events/schedule',
        'title': 'AWS Schedule config',
        'order': 4
      },
      {
        'path': '/framework/docs/providers/aws/events/sns',
        'title': 'SNS Event config',
        'order': 5
      }
    ]
  },
  '/framework/docs/providers/aws/examples': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/index',
        'title': 'Examples'
      }
    ],
    'children': [
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
        'path': '/framework/docs/providers/aws/examples/web-api',
        'title': 'Web api',
        'order': 0
      }
    ]
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
        'title': 'Hello World Node Example'
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/examples/web-api': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/web-api/index',
        'title': 'AWS Lambda Web API Example'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/examples/web-api/node',
        'title': 'Node',
        'order': 0
      }
    ]
  },
  '/framework/docs/providers/aws/examples/web-api/node': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/examples/web-api/node/index',
        'title': 'Web API AWS Lambda Node Example'
      }
    ],
    'children': []
  },
  '/framework/docs/providers/aws/guide': {
    'index': [
      {
        'path': '/framework/docs/providers/aws/guide/index',
        'title': 'AWS'
      }
    ],
    'children': [
      {
        'path': '/framework/docs/providers/aws/guide/intro',
        'title': 'Intro',
        'order': 1
      },
      {
        'path': '/framework/docs/providers/aws/guide/installation',
        'title': 'Installation',
        'order': 2
      },
      {
        'path': '/framework/docs/providers/aws/guide/credentials',
        'title': 'Credentials',
        'order': 3
      },
      {
        'path': '/framework/docs/providers/aws/guide/services',
        'title': 'Services',
        'order': 4
      },
      {
        'path': '/framework/docs/providers/aws/guide/functions',
        'title': 'Functions',
        'order': 5
      },
      {
        'path': '/framework/docs/providers/aws/guide/events',
        'title': 'Events',
        'order': 6
      },
      {
        'path': '/framework/docs/providers/aws/guide/resources',
        'title': 'Resources',
        'order': 7
      },
      {
        'path': '/framework/docs/providers/aws/guide/deploying',
        'title': 'Deploying',
        'order': 8
      },
      {
        'path': '/framework/docs/providers/aws/guide/testing',
        'title': 'Testing',
        'order': 9
      },
      {
        'path': '/framework/docs/providers/aws/guide/variables',
        'title': 'Variables',
        'order': 10
      },
      {
        'path': '/framework/docs/providers/aws/guide/packaging',
        'title': 'Packaging',
        'order': 11
      },
      {
        'path': '/framework/docs/providers/aws/guide/plugins',
        'title': 'Plugins',
        'order': 12
      },
      {
        'path': '/framework/docs/providers/aws/guide/workflow',
        'title': 'Workflow',
        'order': 13
      },
      {
        'path': '/framework/docs/providers/aws/guide/v0_to_v1',
        'title': 'V.0 & V.1',
        'order': 14
      }
    ]
  }
}
