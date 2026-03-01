pipeline {
    agent any
    
    environment {
        ANSIBLE_HOST_KEY_CHECKING = "False"
        BLUE_IP = '34.201.42.56'
        GREEN_IP = '98.81.35.70'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/burgoju/jenkins-blue-green.git'
            }
        }
        
        stage('Test Blue Environment') {
            steps {
                sh """
                    curl -s http://${BLUE_IP}:3000 | grep -q "BLUE ENVIRONMENT"
                    echo "✅ Blue environment is healthy"
                """
            }
        }
        
        stage('Deploy to Green') {
            steps {
                sh """
                    cd ansible
                    ansible-playbook -i hosts playbooks/deploy-app.yml -e "target=green"
                """
            }
        }
        
        stage('Verify Green Deployment') {
            steps {
                sh """
                    sleep 10
                    curl -s http://${GREEN_IP}:3000 | grep -q "GREEN ENVIRONMENT"
                    echo "✅ Green deployment verified"
                """
            }
        }
        
        stage('Smoke Test') {
            steps {
                sh """
                    curl -f http://${GREEN_IP}:3000
                    echo "✅ Smoke test passed"
                """
            }
        }
        
        stage('Switch to Green') {
            steps {
                sh """
                    cd ansible
                    ./switch.sh green
                    echo "✅ Switched to GREEN environment"
                """
            }
        }
        
        stage('Keep Blue for Rollback') {
            steps {
                echo "Blue environment preserved at ${BLUE_IP}:3000 for quick rollback"
            }
        }
    }
    
    post {
        success {
            echo '🎉 Deployment successful! Green is now live'
        }
        failure {
            echo '❌ Deployment failed! Blue is still running'
        }
    }
}