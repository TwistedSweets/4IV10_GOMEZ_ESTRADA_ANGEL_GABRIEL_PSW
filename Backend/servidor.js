require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


app.use(cors());
app.use(express.json());

//Endpoint para registro
app.post('/register', async (req, res) => {
    const { name, apellpat, apellmat, user, email, password } = req.body;

    try {
        //Get a connection from the pool
        const connection = await pool.getConnection();

        //Check if user already exists
        const [existingUsers] = await connection.query('SELECT * FROM usuarios WHERE user = ?', [user]);
        if (existingUsers.length > 0) {
            connection.release();
            return res.status(400).json({ message: 'Usuario ya existe' });
        }

        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Insert user in db
        await connection.query('INSERT INTO usuarios (name, apellpat, apellmat, user, email, password) VALUES (?, ?, ?, ?, ?, ?)',
            [name, apellpat, apellmat, user, email, hashedPassword]);
        connection.release();
        res.json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
});

//Endpoint para login
app.post('/login', async (req, res) => {
    const { user, password } = req.body;

    try {
        const connection = await pool.getConnection();

        const [users] = await connection.query('SELECT * FROM usuarios WHERE user = ?', [user]);

        if (users.length === 0) {
            connection.release();
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const dbUser = users[0];
        // Trim any whitespace from the hash
        dbUser.password = dbUser.password.trim();

        console.log('Received password:', password);
        console.log('Stored hash:', dbUser.password);
        
        const isPasswordValid = await bcrypt.compare(password, dbUser.password);
        console.log('Password valid:', isPasswordValid);
        
        if (!isPasswordValid) {
            connection.release();
         return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        //Generate JWT Token
        const token = require('jsonwebtoken').sign(
            { id: dbUser.id, user: dbUser.user }, process.env.JWT_SECRET, { expiresIn: '24h' });
        connection.release();
        res.json({ message: 'Inicio de sesión exitoso', token, user: dbUser.user });

        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

app.get('/profile', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({ message: 'Token no proporcionado' });
        }

        const token = authHeader.split(' ')[1];

        //Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const connection = await pool.getConnection();

        const [users] = await connection.query(
            'SELECT user, email, name, apellpat, apellmat, created_at FROM usuarios WHERE id = ?', [decoded.id]);
        connection.release();

        if (users.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(users[0]);
    }  catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
     }
});

app.post('/modify', async (req, res) => {

    const { name, apellpat, apellmat, email } = req.body;

    try {

        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            return res.status(401).json({ message: 'Token no proporcionado' });
        }

        const token = authHeader.split(' ')[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const connection = await pool.getConnection();

        await connection.query(
            'UPDATE usuarios SET name = ?, apellpat = ?, apellmat = ?, email = ? WHERE id = ?',
            [name, apellpat, apellmat, email, decoded.id]
        );

        connection.release();

        res.json({ message: 'Perfil actualizado exitosamente' });

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Error al actualizar perfil' });

    }
});