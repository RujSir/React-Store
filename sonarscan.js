// eslint-disable-next-line @typescript-eslint/no-var-requires
const scanner = require('sonarqube-scanner')

scanner(
  {
    /* these lines will triggle Security issues in sonarqube.so please ignore it becuase we only need this file in local machine sonar-scanner */
    serverUrl: 'http://localhost:9000', // host.url
    token: 'sqp_65fc2c6faad57c94ad4a34cbb49b3910a1e202d6',
    options: {
      'sonar.projectName': 'web-admin',
      'sonar.sources': '.',
      'sonar.projectDescription': 'xxx',
      'sonar.projectKey': 'react-store',
      'sonar.projectVersion': '0.0.1',
      'sonar.exclusions': '',
      'sonar.sourceEncoding': 'UTF-8',
    },
  },
  () => process.exit()
)