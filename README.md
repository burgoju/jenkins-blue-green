# Blue-Green Deployment with Jenkins

## 🚀 Project Overview
This project implements a blue-green deployment strategy using Jenkins, AWS EC2, and Node.js.

## Architecture
- **Jenkins Server**: CI/CD orchestration
- **Blue Server**: Production environment
- **Green Server**: Staging environment

## 🛠️ Tech Stack
- Jenkins (Pipeline as Code)
- AWS EC2 (t2.micro instances)
- Node.js (Sample application)
- PM2 (Process manager)
- SSH (Secure communication)

## 📋 Pipeline Stages
1. **Create App**: Generates Node.js application files
2. **Deploy to Green**: Deploys to Green server
3. **Test Green**: Validates deployment
4. **Switch to Green?**: Manual approval gate
5. **Update Blue**: Updates Blue server as standby

## 🔧 Setup Instructions
1. Launch 3 EC2 instances (Jenkins, Blue, Green)
2. Configure Security Groups (ports 22, 8080, 3000)
3. Set up SSH keys between Jenkins and Blue/Green
4. Install Jenkins with required plugins
5. Create this pipeline in Jenkins

## 📊 Blue-Green Strategy
- **Green** receives new version first
- After testing, traffic switches to Green
- **Blue** becomes standby for next deployment
- Zero downtime deployment achieved

## 🎯 Success Criteria
- [x] Automated deployment
- [x] Zero downtime
- [x] Easy rollback capability
- [x] Manual approval gate

## 📝 Notes
- Update IP addresses in Jenkinsfile before use
- Ensure /tmp has sufficient space
- PM2 manages Node.js processes

## 🏆 Achievement
Successfully implemented blue-green deployment with Jenkins pipeline!
