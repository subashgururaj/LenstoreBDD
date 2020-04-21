node {
	stage ('SCM checkout'){
		git "https://github.com/subashgururaj/LenstoreBDD"
		}
	stage ('Build'){
	   sh "mvn clean compile"
       }
       
       stage ('Test'){
	   sh "mvn test"
       }
       	
		
}
