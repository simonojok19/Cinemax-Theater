const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// app.use(app.use(express.static('dist')));
app.use(express.static(path.join(__dirname, 'dist','cinemax-theater')))
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'dist','cinemax-theater','index.html'));
});

app.listen(port, () => {
  console.log('Server runing on port: ', port);
});
