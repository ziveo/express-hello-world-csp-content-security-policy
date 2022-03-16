const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.set('content-security-policy', "frame-ancestors 'self'; default-src 'none'; object-src 'none'");
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
