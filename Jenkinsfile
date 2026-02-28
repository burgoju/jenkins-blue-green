pipeline {
    agent any
    
    environment {
        BLUE_IP = '44.213.113.125'
        GREEN_IP = '13.223.242.203'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub'
                git branch: 'main', url: 'https://github.com/burgoju/jenkins-blue-green.git'
            }
        }
        
        stage('Test Blue Environment') {
            steps {
                sh """
                    echo 'Testing Blue environment...'
                    curl -s http://${BLUE_IP}:3000 | grep -q "BLUE"
                    echo '✅ Blue environment is healthy'
                """
            }
        }
        
        stage('Deploy to Green') {
            steps {
                sh """
                    echo 'Deploying to Green environment...'
                    cd ansible
                    ansible-playbook -i hosts playbooks/deploy-app.yml -e "target=green"
                """
            }
        }
        
        stage('Verify Green Deployment') {
            steps {
                sh """
                    echo 'Waiting for app to start...'
                    sleep 10
                    curl -s http://${GREEN_IP}:3000 | grep -q "GREEN"
                    echo '✅ Green deployment verified'
                """
            }
        }
        
        stage('Smoke Test') {
            steps {
                sh """
                    echo 'Running smoke tests...'
                    curl -f http://${GREEN_IP}:3000
                    echo '✅ Smoke test passed'
                """
            }
        }
        
        stage('Switch to Green') {
            steps {
                sh """
                    echo 'Switching traffic to Green...'
                    cd ansible
                    ./switch.sh green
                    echo '✅ Switched to GREEN environment'
                """
            }
        }
    }
    
    post {
        success {
            echo '🎉 Deployment successful! Green is now live'
        }
        failure {
            echo '❌ Deployment failed! Check the logs above'
        }
    }
}