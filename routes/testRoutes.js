const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hola Mundo' });
});

module.exports = router;