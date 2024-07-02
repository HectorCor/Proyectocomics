// comics/comics.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Obtener todos los cómics
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM Comics');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener cómics' });
    }
});

// Agregar un nuevo cómic
router.post('/', async (req, res) => {
    const { nombre, descripcion, precio } = req.body;

    try {
        const [result] = await db.execute(
            'INSERT INTO Comics (nombre, descripcion, precio) VALUES (?, ?, ?)',
            [nombre, descripcion, precio]
        );
        res.status(201).json({ message: 'Cómic agregado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar cómic' });
    }
});

// Actualizar un cómic
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio } = req.body;

    try {
        const [result] = await db.execute(
            'UPDATE Comics SET nombre = ?, descripcion = ?, precio = ? WHERE id = ?',
            [nombre, descripcion, precio, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cómic no encontrado' });
        }

        res.json({ message: 'Cómic actualizado exitosamente' });
    } catch (error) {
        res.status500.json({ error: 'Error al actualizar cómic' });
    }
});

// Eliminar un cómic
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.execute('DELETE FROM Comics WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cómic no encontrado' });
        }

        res.json({ message: 'Cómic eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar cómic' });
    }
});

module.exports = router;