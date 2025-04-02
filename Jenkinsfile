pipeline {
  agent any

  tools {
    nodejs 'Node 20'
  }

  environment {
    VERCEL_TOKEN = credentials('vercel-token')
  }

  options {
    timeout(time: 5, unit: 'MINUTES')
  }

  stages {
    stage('Clean workspace') {
      steps {
        deleteDir()
      }
    }

    stage('Checkout') {
      steps {
        git url: 'https://github.com/guswill24/node-project.git', branch: 'main'
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

    stage('Build app') {
      steps {
        bat 'set CI=false && npm run build'
      }
    }

    stage('Deploy to Vercel') {
      steps {
        bat 'npx vercel --token=%VERCEL_TOKEN% --prod --yes'
      }
    }
  }

}
