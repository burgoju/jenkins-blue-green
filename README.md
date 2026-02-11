# Jenkins Blue-Green Deployment on AWS

[![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](https://jenkins.io/)
[![Ansible](https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white)](https://www.ansible.com/)
[![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)
[![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

---

## Project Overview
Production-ready Blue-Green deployment pipeline on AWS EC2 with zero downtime.

## Features
- **Jenkins Pipeline** - Automated CI/CD with GitHub webhooks
- **Ansible Automation** - Infrastructure as Code (200+ lines)
- **AWS EC2** - t2.micro instances (free tier)
- **Blue-Green Strategy** - Zero downtime + instant rollback
- **Smoke Testing** - Automated health checks
- **Nginx** - Web server configuration

## Results Achieved
- ⏱️ Deployment time: 30min → 5min (83% faster)
- 🔄 Rollback time: < 60 seconds
- 📈 Uptime: 100% during deployments
- ✅ Zero production incidents

## Live Demo
| Environment | Version | URL |
|------------|---------|-----|
| 🔵 Blue | v1.0 | http://18.60.39.160 |
| 🟢 Green | v2.0 | http://18.61.235.21 |

## Technologies
Jenkins, Ansible, AWS EC2, Nginx, GitHub, Bash


## Author
**Sharath Kiran**  
DevOps Engineer  
