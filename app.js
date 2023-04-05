const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5050;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.listen(port, () => console.log(`listening on ${port}`));

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Поліклініка',
});


// лікар
app.get('/doctor/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

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
  });
});

app.post('/create/doctor/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

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
  });
});

app.delete('/delete/doctor/:pk', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
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
  });
});


// пацієнт
app.get('/patient/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

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
  });
});

app.post('/create/patient/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

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
  });
});

app.delete('/delete/patient/:pk', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
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
  });
});


// прийом
app.get('/reception/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

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
  });
});

app.post('/create/reception/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

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
  });
});

app.delete('/delete/reception/:pk', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
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
  });
});


// діагноз
app.get('/diagnosis/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

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
  });
});

app.post('/create/diagnosis/', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;

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
  });
});

app.delete('/delete/diagnosis/:pk', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
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
  });
});