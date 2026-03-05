pipeline {
    agent any
    
    environment {
        // Use PUBLIC IPs, not private IPs!
        BLUE_IP = '100.54.122.151'    // Your Blue server PUBLIC IP
        GREEN_IP = '44.197.189.121'   // Your Green server PUBLIC IP
    }
    
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/burgoju/jenkins-blue-green.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy to Green') {
            steps {
                sh '''
                    # Deploy to green environment using PUBLIC IP
                    ansible-playbook -i ${GREEN_IP}, deploy.yml -e "color=green" -u ec2-user
                '''
            }
        }
        
        stage('Smoke Test') {
            steps {
                sh '''
                    # Test if green server is working using PUBLIC IP
                    curl -f http://${GREEN_IP}:3000 || exit 1
                '''
            }
        }
        
        stage('Switch Traffic') {
            steps {
                input message: 'Switch traffic from Blue to Green?', ok: 'Yes'
                sh '''
                    echo "Traffic switched to Green server"
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}