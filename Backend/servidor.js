const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

//BD simulada
const usuarios = [];

//Endpount para registro
app.post('/register', async (req, res) => {
    const { name, apellpat, apellmat, user, password } = req.body;

    //Verificar si el usuario ya existe
    const existingUser = usuarios.find(u => u.user === user);
    if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    //Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    //Crear nuevo usuario
    const newUser = { name, apellpat, apellmat, user, password: hashedPassword};
    usuarios.push(newUser);

    res.json({ message: 'Usuario registrado exitosamente' });
});

//Endpoint para login
app.post('/login', async (req, res) => {
    const { user, password } = req.body;

    const usuario = usuarios.find(u => u.user === user);
    if (!usuario) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, usuario.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    res.json({ message: 'Login exitoso' });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

//See users
app.get('/users', (req, res) => {
    res.json(usuarios);
});