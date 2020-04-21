pipeline {
  agent any
  tools {
    maven 'M3'
	
  }
  stages {
    stage ('SCM checkout'){
	steps {
		git "https://github.com/subashgururaj/LenstoreBDD"
		}
		}
    stage('Build') {
      steps {
        sh 'mvn clean'
      }
    }
  }
}