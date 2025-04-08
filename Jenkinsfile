pipeline {
  agent any

  environment {
    CI = "false" // Desactiva que React trate los warnings como errores
    VERCEL_TOKEN = credentials('vercel-token') // Token de acceso seguro para desplegar en Vercel
  }

  stages {
    stage('Declarativo: Checkout SCM') {
      steps {
        checkout scm
      }
    }

    stage('Instalar herramientas') {
      steps {
        tool name: 'Node 20', type: 'nodejs'
      }
    }

    stage('Limpiar espacio de trabajo') {
      steps {
        deleteDir()
      }
    }

    stage('Clonar repositorio') {
      steps {
        git url: 'https://github.com/guswill24/node-project.git', branch: 'main'
      }
    }

    stage('Instalar dependencias') {
      steps {
        bat 'npm install --legacy-peer-deps'
      }
    }

    stage('Ejecutar pruebas') {
      steps {
        bat 'npm test -- --watchAll=false'
      }
    }

    stage('Construir aplicación') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Instalar CLI de Vercel') {
      steps {
        bat 'npm install -g vercel'
      }
    }

    stage('Desplegar en Vercel') {
      steps {
        withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
          bat 'vercel --prod --token %VERCEL_TOKEN% --yes'
        }
      }
    }
  }

  post {
    success {
      echo "✅ Pipeline ejecutado correctamente. Build exitoso."
    }

    failure {
      echo "❌ Error en alguna etapa del pipeline. Revisar los logs."
    }

    always {
      echo "📦 Pipeline finalizado (éxito o fallo). Puedes revisar el historial."
    }
  }
}
