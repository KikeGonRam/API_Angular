    const pool = require('../config/database');

    const adminController = {
    getAllAdmins: async (req, res) => {
        try {
        const [rows] = await pool.query('SELECT * FROM admins');
        res.json(rows);
        } catch (error) {
        res.status(500).json({ error: 'Error fetching admins' });
        }
    },
    getAdminById: async (req, res) => {
        try {
        const [rows] = await pool.query('SELECT * FROM admins WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Admin not found' });
        res.json(rows[0]);
        } catch (error) {
        res.status(500).json({ error: 'Error fetching admin' });
        }
    },
    createAdmin: async (req, res) => {
        try {
        const { user_id, role } = req.body;
        const [result] = await pool.query(
            'INSERT INTO admins (user_id, role) VALUES (?, ?)',
            [user_id, role]
        );
        res.status(201).json({ id: result.insertId, user_id, role });
        } catch (error) {
        res.status(500).json({ error: 'Error creating admin' });
        }
    },
    updateAdmin: async (req, res) => {
        try {
        const { user_id, role } = req.body;
        const [result] = await pool.query(
            'UPDATE admins SET user_id = ?, role = ? WHERE id = ?',
            [user_id, role, req.params.id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Admin not found' });
        res.json({ message: 'Admin updated' });
        } catch (error) {
        res.status(500).json({ error: 'Error updating admin' });
        }
    },
    deleteAdmin: async (req, res) => {
        try {
        const [result] = await pool.query('DELETE FROM admins WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Admin not found' });
        res.json({ message: 'Admin deleted' });
        } catch (error) {
        res.status(500).json({ error: 'Error deleting admin' });
        }
    }
    };

    module.exports = adminController;