pipeline {
    agent any

    stages {
	    
	    Stage ('SCM Checkot'){
		    steps{
			    git "https://github.com/subashgururaj/LenstoreBDD"
		    }
	    }
        stage ('Compile Stage') {

            steps {
                withMaven(maven : 'maven_3_5_0') {
                    sh 'mvn clean compile'
                }
            }
        }

        stage ('Testing Stage') {

            steps {
                withMaven(maven : 'maven_3_5_0') {
                    sh 'mvn test'
                }
            }
        }


        
    }
}
