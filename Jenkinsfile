pipeline{
    agent any
    tools {nodejs "Node"}
    stages {
        stage('Clone Repository'){
            steps{
                git branch: 'main',
                    url: 'https://github.com/harshmathurgeek/jenkins-node.git'
            }
        }
        
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
         
        
        stage('Deploy'){
            steps {
                sh 'npm run start'
            }
        }
    }
}
