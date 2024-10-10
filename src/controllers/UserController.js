const User = require('../models/UserModel');

console.log('Controlador.... INICIO')

// Registrar Usuario POST
exports.registerUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
        console.log({newUser});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Iniciar Sesión (simplificado, se puede mejorar con JWT)
exports.loginUser = async (req, res) => {
    // Lógica de inicio de sesión
};

// Ver Perfil
exports.getProfile = async (req, res) => {
    
    // Lógica para obtener el perfil del usuario
};

// Actualizar Perfil
exports.updateProfile = async (req, res) => {
    // Lógica para actualizar el perfil del usuario
};

// Eliminar Usuario
exports.deleteUser = async (req, res) => {
    // Lógica para eliminar un usuario
};

// Listar Usuarios
exports.listUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
};

console.log('Controlador.... FIN')
