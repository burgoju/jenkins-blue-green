pipeline {
    agent any
    
    environment {
        BLUE_IP = '13.220.239.64'
        GREEN_IP = '3.91.147.142'
    }
    
    stages {
        stage('Create App') {
            steps {
                sh '''
                    mkdir -p /tmp/blue-green-app
                    cd /tmp/blue-green-app
                    
                    cat > package.json << 'EOF'
{
  "name": "blue-green-app",
  "version": "1.0.0",
  "scripts": { "start": "node app.js", "test": "echo \\"Tests passed!\\"" }
}
EOF

                    cat > app.js << 'EOF'
const http = require('http');
const os = require('os');
const server = http.createServer((req, res) => {
  const color = process.env.COLOR || 'blue';
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <body style="background:${color=='blue'?'#3498db':'#2ecc71'};color:white;font-family:Arial;text-align:center;padding:100px;">
      <h1>${color.toUpperCase()} SERVER</h1>
      <p>Hostname: ${os.hostname()}</p>
      <p>Time: ${new Date().toLocaleString()}</p>
    </body>
  `);
});
server.listen(3000, () => console.log('Server running on port 3000'));
EOF
                '''
            }
        }
        
        stage('Deploy to Green') {
            steps {
                sh '''
                    ssh -i /var/lib/jenkins/.ssh/id_rsa -o StrictHostKeyChecking=no ec2-user@${GREEN_IP} "mkdir -p /tmp/blue-green-app"
                    scp -i /var/lib/jenkins/.ssh/id_rsa -o StrictHostKeyChecking=no -r /tmp/blue-green-app/* ec2-user@${GREEN_IP}:/tmp/blue-green-app/
                    ssh -i /var/lib/jenkins/.ssh/id_rsa -o StrictHostKeyChecking=no ec2-user@${GREEN_IP} "
                        cd /tmp/blue-green-app &&
                        npm install &&
                        COLOR=green pm2 delete myapp-green 2>/dev/null || true &&
                        COLOR=green pm2 start app.js --name myapp-green --update-env
                    "
                '''
            }
        }
        
        stage('Test Green') {
            steps {
                sh 'sleep 5'
                sh 'curl -f http://${GREEN_IP}:3000 || exit 1'
            }
        }
        
        stage('Switch to Green?') {
            steps {
                input message: 'Switch traffic from Blue to Green?', ok: 'Yes'
            }
        }
        
        stage('Update Blue') {
            steps {
                sh '''
                    ssh -i /var/lib/jenkins/.ssh/id_rsa -o StrictHostKeyChecking=no ec2-user@${BLUE_IP} "mkdir -p /tmp/blue-green-app"
                    scp -i /var/lib/jenkins/.ssh/id_rsa -o StrictHostKeyChecking=no -r /tmp/blue-green-app/* ec2-user@${BLUE_IP}:/tmp/blue-green-app/
                    ssh -i /var/lib/jenkins/.ssh/id_rsa -o StrictHostKeyChecking=no ec2-user@${BLUE_IP} "
                        cd /tmp/blue-green-app &&
                        npm install &&
                        COLOR=blue pm2 delete myapp-blue 2>/dev/null || true &&
                        COLOR=blue pm2 start app.js --name myapp-blue --update-env
                    "
                '''
            }
        }
    }
}
