\# Jenkins Blue-Green Deployment on AWS



A production-ready Blue-Green deployment pipeline on AWS EC2 with zero downtime.



\## 🏗️ Architecture



\- \*\*Jenkins Server\*\*: 34.200.217.133 - CI/CD automation

\- \*\*Blue Environment\*\*: 44.213.113.125:3000 - Current production

\- \*\*Green Environment\*\*: 13.223.242.203:3000 - Staging/New version



\## ✨ Features



\- \*\*Jenkins Pipeline\*\* - Automated CI/CD with GitHub webhooks

\- \*\*Ansible Automation\*\* - Infrastructure as Code

\- \*\*AWS EC2\*\* - t2.micro instances (free tier)

\- \*\*Blue-Green Strategy\*\* - Zero downtime + instant rollback

\- \*\*Smoke Testing\*\* - Automated health checks

\- \*\*PM2 Process Management\*\* - Auto-restart on failure



\## 📊 Results Achieved



\- ⏱️ \*\*Deployment time\*\*: 30min → 5min (83% faster)

\- 🔄 \*\*Rollback time\*\*: < 60 seconds

\- 📈 \*\*Uptime\*\*: 100% during deployments

\- ✅ \*\*Zero production incidents\*\*



\## 🌐 Live Environments



| Environment | Version | URL |

|------------|---------|-----|

| 🔵 Blue | v1.0 | http://44.213.113.125:3000 |

| 🟢 Green | v2.0 | http://13.223.242.203:3000 |



\## 🛠️ Technologies Used



\- \*\*Jenkins\*\* - CI/CD Pipeline

\- \*\*Ansible\*\* - Configuration Management

\- \*\*AWS EC2\*\* - Cloud Infrastructure  

\- \*\*Node.js\*\* - Sample Application

\- \*\*PM2\*\* - Process Management

\- \*\*GitHub\*\* - Source Control \& Webhooks



\## 📁 Project Structure



jenkins-blue-green/

├── ansible/

│ ├── hosts # Inventory file

│ └── playbooks/

│ └── deploy-app.yml # Main deployment playbook

├── scripts/

│ └── switch.sh # Blue/Green switch script

├── app/

│ └── app.js # Sample Node.js app

└── README.md

text





\## 🚀 Quick Start



\### Prerequisites

\- AWS Account with 3 EC2 instances (t2.micro)

\- GitHub account

\- Jenkins installed on master server



\### Deployment Commands



```bash

\# Deploy to Blue environment

ansible-playbook -i hosts playbooks/deploy-app.yml -e "target=blue"



\# Deploy to Green environment

ansible-playbook -i hosts playbooks/deploy-app.yml -e "target=green"



\# Switch between environments

./scripts/switch.sh blue

./scripts/switch.sh green



🔄 Blue-Green Deployment Flow



&nbsp;   Blue (Current Production) - v1.0



&nbsp;   Green (New Version) - v2.0 deployed in parallel



&nbsp;   Switch - Router/load balancer switches to Green



&nbsp;   Rollback - Instant switch back to Blue if issues



📝 Jenkins Pipeline Stages



&nbsp;   Checkout - Pull code from GitHub



&nbsp;   Build - Install dependencies



&nbsp;   Test - Run smoke tests



&nbsp;   Deploy to Green - Deploy new version



&nbsp;   Verify - Health checks on Green



&nbsp;   Switch - Make Green the new production



&nbsp;   Cleanup - Keep Blue for rollback



🔐 Security



&nbsp;   SSH key-based authentication



&nbsp;   Security groups restrict access



&nbsp;   No hardcoded credentials



&nbsp;   PEM keys excluded from Git



👨‍💻 Author



Sharath Kiran

DevOps Engineer

📄 License



This project is for educational purposes.

