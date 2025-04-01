pipeline {
  agent any

  tools {
    nodejs 'Node 20'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Run tests') {
      steps {
        bat 'npm test'
      }
    }
  }
}
