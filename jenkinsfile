node {
	stage ('SCM checkout'){
		git "https://github.com/subashgururaj/LenstoreBDD"
		}
	stage ('Build'){
	   sh "mvn clean install"
       }
       
       stage ('Test'){
	   sh "mvn test"
       }
       	
		stage ('Report'){
		}
		}
}