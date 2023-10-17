pipeline{
    agent any
    tools {nodejs "Node"}
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/vikashj007/jenkins-node.git'
            }
        }
        
        stage('Install Dependencies'){
            steps {
                bat 'npm install'
            }
        }
         
        
        stage('Deploy'){
            steps {
                bat 'npm run start'
            }
        }
    }
}
