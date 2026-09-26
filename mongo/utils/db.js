const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/moviesdb';

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Conexión exitosa a la BBDD');
    } catch (error) {
        console.log('Error al conectar a la BBDD', error.message);
    }
}

module.exports = {
    connect
};