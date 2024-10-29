const express = require('express');
const path = require('path');
const numberController = require('./controllers/numberController');
require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/generateNumbers', numberController.generateNumbers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});