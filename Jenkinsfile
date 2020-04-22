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
	  post{
	  always{
	  //archiveArtifacts "cucumber-html-reports/*"
	  archiveArtifacts "/target/cucumber.json"
	  }
	  
	  }
    }
    
    stage('Cucumber Reports') {
      steps {
      hygieiaTestPublishStep buildStatus: 'Success', testApplicationName: 'WebAutomationProj', testEnvironmentName: 'preprod', testFileNamePattern: '**/cucumber.json', testResultsDirectory: 'target', testType: 'Unit'
        cucumber buildStatus: "UNSTABLE",
        fileIncludePattern: "**/cucumber.json",
        jsonReportDirectory: 'target'
      }
    }
  }
}