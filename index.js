// importaciones
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./configs/database');
// configurar servidor
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
// endpoints
app.get('/', (req, res) => {
  var locals = {
    title: 'Bienvenido',
  };
  res.render('home', locals);
});

app.get('/nivel', async (req, res) => {
  // recepcionar parámetros
  const mensaje = req.query.mensaje;
  console.log(mensaje);
  // conexión a db
  const query = 'SELECT * FROM niveles';
  const replacements = {};
  const niveles = await db.query(query, {
    replacements,
    type: db.QueryTypes.SELECT,
  });
  // renderizar vista
  var locals = {
    title: 'Niveles',
    niveles: niveles,
    mensaje: mensaje
  };
  res.render('nivel/index', locals);
});

app.get('/nivel/agregar', async (req, res) => {
  // renderizar vista
  var locals = {
    title: 'Niveles - Agregar',
  };
  res.render('nivel/agregar', locals);
});

app.post('/nivel/crear', async (req, res) => {
  // recepción de datos
  const id = req.body.id;
  const nombre = req.body.nombre;
  // conexión a db
  const query = 'INSERT INTO niveles (nombre) VALUES (:nombre);';
  const replacements = {
    nombre: nombre
  };
  // redireccionar listado
  res.redirect('/nivel?mensaje=Registro agregado');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});