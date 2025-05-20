// Modelo de administrador
const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'superadmin'],
        default: 'admin'
    }
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
// Este modelo define la estructura de un administrador en la base de datos.