#!/bin/bash

if [ "$1" == "blue" ]; then
    echo "🔄 Switching to BLUE environment..."
    ansible-playbook -i hosts playbooks/deploy-app.yml -e "target=blue"
    echo "✅ Now using BLUE environment"
    echo "🔵 Blue URL: http://44.213.113.125:3000"
    echo "🟢 Green URL: http://13.223.242.203:3000"
elif [ "$1" == "green" ]; then
    echo "🔄 Switching to GREEN environment..."
    ansible-playbook -i hosts playbooks/deploy-app.yml -e "target=green"
    echo "✅ Now using GREEN environment"
    echo "🔵 Blue URL: http://44.213.113.125:3000"
    echo "🟢 Green URL: http://13.223.242.203:3000"
else
    echo "Usage: ./switch.sh [blue|green]"
    echo "Example: ./switch.sh blue"
fi
