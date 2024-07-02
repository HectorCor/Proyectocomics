// auth/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const SECRET_KEY = 'tu_clave_secreta';

// Registro de usuario
router.post('/register', async (req, res) => {
  const { nombre_usuario, email, contraseña } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const [result] = await db.execute(
      'INSERT INTO Usuarios (nombre_usuario, email, contraseña) VALUES (?, ?, ?)',
      [nombre_usuario, email, hashedPassword]
    );

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// Inicio de sesión de usuario
router.post('/login', async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const [rows] = await db.execute('SELECT * FROM Usuarios WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;