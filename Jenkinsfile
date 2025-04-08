pipeline {
  agent any // Utiliza cualquier agente disponible para ejecutar el pipeline

  environment {
    CI = "false" // Evita que React detenga el proceso por advertencias
  }

  stages {

    stage('Declarativo: Obtener código fuente repositorio (SCM)') {
      steps {
        checkout scm // Utiliza la configuración de repositorio integrada en Jenkins
      }
    }

    stage('Instalar herramientas') {
      steps {
        tool name: 'Node 20', type: 'nodejs' // Carga la versión 20 de Node.js configurada en Jenkins
      }
    }

    stage('Limpiar espacio de trabajo') {
      steps {
        deleteDir() // Elimina archivos del build anterior
      }
    }

    stage('Clonar repositorio') {
      steps {
        git url: 'https://github.com/guswill24/node-project.git', branch: 'main'
      }
    }

    stage('Instalar dependencias') {
      steps {
        bat 'npm install --legacy-peer-deps' // Instala paquetes necesarios usando npm
      }
    }

    stage('Ejecutar pruebas') {
      steps {
        bat 'npm test -- --watchAll=false' // Ejecuta pruebas automatizadas una sola vez
      }
    }

    stage('Construir la aplicación') {
      steps {
        bat 'npm run build' // Genera versión lista para producción
      }
    }
  }
}
