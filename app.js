ssh ec2-user@10.0.7.187 "cd /opt/myapp && cat > app.js << 'EOF'
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  const os = require('os');
  const hostname = os.hostname();
  const color = process.env.COLOR || 'blue';
  
  res.end(
    '<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '  <title>Blue-Green Deployment</title>\n' +
    '  <style>\n' +
    '    body { \n' +
    '      background-color: ' + (color === 'blue' ? '#3498db' : '#2ecc71') + ';\n' +
    '      color: white;\n' +
    '      font-family: Arial, sans-serif;\n' +
    '      text-align: center;\n' +
    '      padding-top: 100px;\n' +
    '    }\n' +
    '    h1 { font-size: 48px; }\n' +
    '    .server-info { \n' +
    '      background: rgba(0,0,0,0.2);\n' +
    '      padding: 20px;\n' +
    '      border-radius: 10px;\n' +
    '      margin: 20px auto;\n' +
    '      max-width: 600px;\n' +
    '    }\n' +
    '  </style>\n' +
    '</head>\n' +
    '<body>\n' +
    '  <h1>🚀 Blue-Green Deployment Demo</h1>\n' +
    '  <div class="server-info">\n' +
    '    <h2>You are on: ' + color.toUpperCase() + ' Server</h2>\n' +
    '    <p>Server Hostname: ' + hostname + '</p>\n' +
    '    <p>Deployment Time: ' + new Date().toLocaleString() + '</p>\n' +
    '    <p>Version: 1.0.0</p>\n' +
    '  </div>\n' +
    '</body>\n' +
    '</html>\n'
  );
});

const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log('Server running on port ' + PORT + ' in ' + (process.env.COLOR || 'blue') + ' mode');
});
EOF"
