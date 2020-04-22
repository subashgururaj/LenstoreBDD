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
    stage('Test') {
      steps {
        sh 'mvn test'
      }
    }
    
    stage('Cucumber Reports') {
      steps {
        cucumber buildStatus: "UNSTABLE",
        fileIncludePattern: "**/cucumber.json",
        jsonReportDirectory: 'target'
      }
    }
  }
}