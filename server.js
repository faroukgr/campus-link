const express = require('express');
const path = require('path');
const app = express();

app.use(express.static( './dist/student-management'));

app.get('/*', function(req, res) {
  res.sendFile('index.html',{root:'dist/student-management/'});
});

app.listen(process.env.PORT || 8000);