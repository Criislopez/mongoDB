const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const movies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/moviesdb');

    console.log('Conexión exitosa a la BBDD');

    await Movie.deleteMany();

    await Movie.insertMany(movies);

    console.log('Películas insertadas correctamente');

  } catch (error) {
    console.error('ERROR:', error);
  } finally {
    await mongoose.disconnect();
  }
};

seedDatabase();