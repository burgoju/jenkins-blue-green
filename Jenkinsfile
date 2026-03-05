pipeline {
    agent any
    
    environment {
        BLUE_IP = '100.54.122.151'    // Your NEW Blue server IP
        GREEN_IP = '44.197.189.121'   // Your NEW Green server IP
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
                    ansible-playbook -i ${GREEN_IP}, deploy.yml -e "color=green"
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
                    # Here you would update load balancer or DNS
                    # For demo, we'll just note the switch
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