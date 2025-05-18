const pool = require('../config/database');

const userController = {
    getAllUsers: async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, username, email, created_at FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
    },
    getUserById: async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, username, email, created_at FROM users WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user' });
    }
    },
    createUser: async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const [result] = await pool.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password] // En producción, hashear la contraseña
        );
        res.status(201).json({ id: result.insertId, username, email });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
    },
    updateUser: async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const [result] = await pool.query(
        ' UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?',
        [username, email, password, req.params.id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User updated' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
    },
    deleteUser: async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM users WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
    }
};

module.exports = userController;