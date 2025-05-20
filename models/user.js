// Modelo de users 
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
// Exportar el modelo
module.exports = User;
// Este modelo define la estructura de un usuario en la base de datos.
// Incluye campos como nombre, correo electrónico, contraseña y rol (usuario o administrador).
// El campo de correo electrónico es único para evitar duplicados.