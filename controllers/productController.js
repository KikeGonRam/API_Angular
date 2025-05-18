    const pool = require('../config/database');

    const productController = {
    getAllProducts: async (req, res) => {
        try {
        const [rows] = await pool.query('SELECT * FROM products');
        res.json(rows);
        } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
        }
    },
    getProductById: async (req, res) => {
        try {
        const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Product not found' });
        res.json(rows[0]);
        } catch (error) {
        res.status(500).json({ error: 'Error fetching product' });
        }
    },
    createProduct: async (req, res) => {
        try {
        const { name, description, price, stock } = req.body;
        const [result] = await pool.query(
            'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)',
            [name, description || null, price, stock]
        );
        res.status(201).json({ id: result.insertId, name, price, stock });
        } catch (error) {
        res.status(500).json({ error: 'Error creating product' });
        }
    },
    updateProduct: async (req, res) => {
        try {
        const { name, description, price, stock } = req.body;
        const [result] = await pool.query(
            'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?',
            [name, description || null, price, stock, req.params.id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Product updated' });
        } catch (error) {
        res.status(500).json({ error: 'Error updating product' });
        }
    },
    deleteProduct: async (req, res) => {
        try {
        const [result] = await pool.query('DELETE FROM products WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Product deleted' });
        } catch (error) {
        res.status(500).json({ error: 'Error deleting product' });
        }
    }
    };

    module.exports = productController;