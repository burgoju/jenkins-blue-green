const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Get the server's hostname to identify Blue/Green
  const os = require('os');
  const hostname = os.hostname();
  const color = process.env.COLOR || 'blue';
  
  res.end(
    <!DOCTYPE html>
    <html>
    <head>
      <title>Blue-Green Deployment</title>
      <style>
        body { 
          background-color: ;
          color: white;
          font-family: Arial, sans-serif;
          text-align: center;
          padding-top: 100px;
        }
        h1 { font-size: 48px; }
        .server-info { 
          background: rgba(0,0,0,0.2);
          padding: 20px;
          border-radius: 10px;
          margin: 20px auto;
          max-width: 600px;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Blue-Green Deployment Demo</h1>
      <div class="server-info">
        <h2>You are on:  Server</h2>
        <p>Server Hostname: </p>
        <p>Deployment Time: </p>
        <p>Version: 1.0.0</p>
      </div>
    </body>
    </html>
  );
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(Server running on port  in  mode);
});
