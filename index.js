// importaciones
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./configs/database');
// configurar servidor
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
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

app.get('/nivel/modificar', async (req, res) => {
  // recepción de datos
  const id = req.query.id;
  // conexión a db
  const query = 'SELECT * FROM niveles WHERE id=:id;';
  const replacements = {
    id: id
  };
  const rs = await db.query(query, {
    replacements,
    type: db.QueryTypes.SELECT,
  });
  // renderizar vista
  var locals = {
    title: 'Niveles - Modificar',
    nivel: rs[0]
  };
  res.render('nivel/modificar', locals);
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
  const rpta = await db.query(query, {
    replacements,
    type: db.QueryTypes.INSERT,
  });
  // redireccionar listado
  res.redirect(`/nivel?mensaje=Registro agregado con el id ${rpta[0]}`);
});

app.post('/nivel/editar', async (req, res) => {
  // recepción de datos
  const id = req.body.id;
  const nombre = req.body.nombre;
  // conexión a db
  const query = 'UPDATE niveles SET nombre = :nombre WHERE id = :id;';
  const replacements = {
    id: id,
    nombre: nombre
  };
  const rpta = await db.query(query, {
    replacements,
    type: db.QueryTypes.UPDATE,
  });
  // redireccionar listado
  res.redirect(`/nivel?mensaje=Registro modificado con el id ${id}`);
});

app.get('/nivel/eliminar', async (req, res) => {
  // recepción de datos
  const id = req.query.id;
  // conexión a db
  const query = 'DELETE FROM niveles WHERE id=:id;';
  const replacements = {
    id: id
  };
  await db.query(query, {
    replacements,
    type: db.QueryTypes.DELETE,
  });
  // redireccionar listado
  res.redirect('/nivel?mensaje=Registro eliminado');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});