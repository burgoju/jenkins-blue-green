pipeline {
    agent any
    
    environment {
<<<<<<< HEAD
        BLUE_IP = '100.54.122.151'    // Your NEW Blue server IP
        GREEN_IP = '44.197.189.121'   // Your NEW Green server IP
=======
        BLUE_IP = '10.0.7.187'      // Your Blue server private IP
        GREEN_IP = '10.0.2.43'      // Your Green server private IP
>>>>>>> e3f8023f20ba511a59a160e0139f376162da892c
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
                    # Deploy to green environment
<<<<<<< HEAD
                    ansible-playbook -i ${GREEN_IP}, deploy.yml -e "color=green"
=======
                    ansible-playbook -i ${GREEN_IP}, deploy.yml -e "color=green" -u ec2-user
>>>>>>> e3f8023f20ba511a59a160e0139f376162da892c
                '''
            }
        }
        
        stage('Smoke Test') {
            steps {
                sh '''
                    # Test if green server is working
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