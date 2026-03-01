#!/bin/bash

if [ "$1" == "blue" ]; then
    echo "🔄 Switching to BLUE environment..."
    ansible-playbook -i hosts playbooks/deploy-app.yml -e "target=blue"
    echo "✅ Now using BLUE environment"
    echo "🔵 Blue URL: http://34.201.42.56:3000"
    echo "🟢 Green URL: http://98.81.35.70:3000"
elif [ "$1" == "green" ]; then
    echo "🔄 Switching to GREEN environment..."
    ansible-playbook -i hosts playbooks/deploy-app.yml -e "target=green"
    echo "✅ Now using GREEN environment"
    echo "🔵 Blue URL: http://34.201.42.56:3000"
    echo "🟢 Green URL: http://98.81.35.70:3000"
else
    echo "Usage: ./switch.sh [blue|green]"
    echo "Example: ./switch.sh blue"
fi
