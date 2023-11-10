const http = require('http'); 
const fs = require('fs'); 
Commande ECHO activ‚e.
const server = http.createServer((req, res) =
  fs.readFile('index.html', (err, data) =
    if (err) { 
      res.writeHead(404); 
      res.end('Not Found'); 
      return; 
    } 
    res.writeHead(200, {'Content-Type': 'text/html'}); 
    res.end(data); 
  }); 
}); 
Commande ECHO activ‚e.
const port = 3000; 
server.listen(port, () =
  console.log(`Serveur en cours d'exÃ©cution sur http://localhost:${port}`); 
}); 
