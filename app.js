const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5050;
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(port, () => console.log(`listening on ${port}`));

const connection = mysql.createConnection(
  process.env.DATABASE_URL
);


// лікар
app.get('/doctor/', (req, res) => {
  try {

  
    connection.query(
      'SELECT * FROM `Лікар` WHERE 1;',
      (err, rows) => {
        connection.release();
        if (!err) {
          res.status(200).json({ data: rows });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
    );
    } catch (e) {}
});

app.post('/create/doctor/', (req, res) => {
  try {

    const values = req.body;

    connection.query('INSERT INTO `Лікар` SET ?', values, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).json({
          message: `\`Лікар\` з даними ${JSON.stringify(values)} створено`,
        });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
  } catch(e) {}
});

app.delete('/delete/doctor/:pk', (req, res) => {
  try {
    console.log(req.params.pk)
    connection.query(
      'DELETE FROM `Лікар` WHERE `id_лікар` = ?',
      [req.params.pk],
      (err, _) => {
        connection.release();
        if (!err) {
          res.status(200).json({
            message: `\`Лікар\` з id = [${req.params.pk}] видалено`,
          });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
    );
    } catch (e) {}
});


// пацієнт
app.get('/patient/', (req, res) => {
  try {

    connection.query(
      'SELECT * FROM `Пацієнт` WHERE 1;',
      (err, rows) => {
        connection.release();
        if (!err) {
          res.status(200).json({ data: rows });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
    );
    } catch (e) {}
});

app.post('/create/patient/', (req, res) => {
  try {

    const values = req.body;

    connection.query('INSERT INTO `Пацієнт` SET ?', values, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).json({
          message: `\`Пацієнт\` з даними ${JSON.stringify(values)} створено`,
        });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
  } catch (e) {}
});

app.delete('/delete/patient/:pk', (req, res) => {
  try {
    console.log(req.params.pk)
    connection.query(
      'DELETE FROM `Пацієнт` WHERE `id_пацієнт` = ?',
      [req.params.pk],
      (err, _) => {
        connection.release();
        if (!err) {
          res.status(200).json({
            message: `\`Пацієнт\` з id = [${req.params.pk}] видалено`,
          });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
    );
  } catch (e) {} 
});


// прийом
app.get('/reception/', (req, res) => {
  try {

    connection.query(
      'SELECT * FROM `Прийом` WHERE 1;',
      (err, rows) => {
        connection.release();
        if (!err) {
          res.status(200).json({ data: rows });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
    );
  } catch (e) {}
});

app.post('/create/reception/', (req, res) => {
  try {
    const values = req.body;

    connection.query('INSERT INTO `Прийом` SET ?', values, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).json({
          message: `\`Прийом\` з даними ${JSON.stringify(values)} створено`,
        });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
  } catch (e) {}
});

app.delete('/delete/reception/:pk', (req, res) => {
  try {
    console.log(req.params.pk)
    connection.query(
      'DELETE FROM `Прийом` WHERE `id_прийом` = ?',
      [req.params.pk],
      (err, _) => {
        connection.release();
        if (!err) {
          res.status(200).json({
            message: `\`Прийом\` з id = [${req.params.pk}] видалено`,
          });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
    );
  } catch (e) {}
});


// діагноз
app.get('/diagnosis/', (req, res) => {
  try {

    connection.query(
      'SELECT * FROM `Діагноз` WHERE 1;',
      (err, rows) => {
        connection.release();
        if (!err) {
          res.status(200).json({ data: rows });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
    );
  } catch (e) {}
});

app.post('/create/diagnosis/', (req, res) => {
  try {
    const values = req.body;

    connection.query('INSERT INTO `Діагноз` SET ?', values, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).json({
          message: `\`Діагноз\` з даними ${JSON.stringify(values)} створено`,
        });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
  } catch (e) {}
});

app.delete('/delete/diagnosis/:pk', (req, res) => {
  try {
    console.log(req.params.pk)
    connection.query(
      'DELETE FROM `Діагноз` WHERE `id_діагноз` = ?',
      [req.params.pk],
      (err, _) => {
        connection.release();
        if (!err) {
          res.status(200).json({
            message: `\`Діагноз\` з id = [${req.params.pk}] видалено`,
          });
        } else {
          res.status(500).json({ message: err.message });
        }
      }
    );
  } catch (e) {}
});
app.get('/', (req, res) => {
  res.send('працює');
}) 

module.export = app;

