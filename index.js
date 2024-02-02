const express = require('express');
const db = require('./configs/database');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var locals = {
    title: 'Bienvenido',
  };
  res.render('home', locals);
});

app.get('/nivel', async (req, res) => {
  const query = 'SELECT * FROM niveles';
  const replacements = {};
  const niveles = await db.query(query, {
    replacements,
    type: db.QueryTypes.SELECT,
  });
  var locals = {
    title: 'Niveles',
    niveles: niveles
  };
  res.render('nivel/index', locals);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});