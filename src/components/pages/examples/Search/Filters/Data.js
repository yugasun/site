const platformOptions = [
  [
    {
      id: 'aws',
      name: 'platform',
      text: 'AWS',
    },
    {
      id: 'gcp',
      name: 'platform',
      text: 'Google Cloud',
    },
    {
      id: 'azure',
      name: 'platform',
      text: 'Azure',
    },
  ],
  [
    {
      id: 'openwhisk',
      name: 'platform',
      text: 'OpenWhisk',
    },
    {
      id: 'kubeless',
      name: 'platform',
      text: 'Kubeless',
    },
  ],
]

const languageOptions = [
  [
    {
      id: 'node',
      name: 'language',
      text: 'nodeJS',
    },
    {
      id: 'go',
      name: 'language',
      text: 'Go',
    },
    {
      id: 'python',
      name: 'language',
      text: 'Python',
    },
  ],
  [
    {
      id: 'swift',
      name: 'language',
      text: 'Swift',
    },
    {
      id: 'java',
      name: 'language',
      text: 'Java',
    },
    {
      id: 'php',
      name: 'language',
      text: 'PHP',
    },
  ],
  [
    {
      id: 'ruby',
      name: 'language',
      text: 'Ruby',
    },
  ],
]

const frameworkOptions = [
  [
    {
      id: 'v1',
      name: 'framework',
      text: 'version 1',
    },
  ],
]

export default {
  platformOptions,
  languageOptions,
  frameworkOptions,
}
