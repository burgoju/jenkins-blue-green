# Jenkins Blue-Green Deployment Demo

This project demonstrates blue-green deployment using Jenkins, Ansible, and EC2.

## Architecture
- Jenkins Server: 3.237.176.172
- Blue Server: 34.201.47.114
- Green Server: 98.86.174.209

## How it works
1. Code pushed to GitHub triggers Jenkins
2. Jenkins runs tests
3. Jenkins deploys to Green server
4. Smoke tests verify Green works
5. Manual approval to switch traffic to Green
6. Blue becomes idle (next deployment target)
