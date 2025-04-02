pipeline {
  agent any
  tools {
    nodejs 'Node 20'
  }
  options {
    timeout(time: 2, unit: 'MINUTES')
  }
  stages {
    stage('Clean workspace') {
      steps {
        deleteDir()
      }
    }
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install dependencies') {
      steps {
        bat 'npm install --legacy-peer-deps'
      }
    }
stage('Run tests') {
  steps {
    bat 'npm test -- --watchAll=false'
  }
}
  }
}
