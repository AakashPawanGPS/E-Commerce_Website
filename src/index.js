import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const http = require('http');
const port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World!');
}).listen(port);

console.log(`Server running at http://localhost:${port}`);

ReactDOM.render(<App />, document.getElementById('root'));
