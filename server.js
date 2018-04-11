const history = require('connect-history-api-fallback');
const express = require('express');
const app = express();

app.use(history({
    verbose: true
  }));
  
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
