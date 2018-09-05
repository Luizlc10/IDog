const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

//set static folder
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server started on port 3000...`);
});
