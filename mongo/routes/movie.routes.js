const express = require('express');

const router = express.Router();

const {
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    getMovieByGenre,
    getMovieByYear,
    createMovie,
    updateMovie,
    deleteMovie,
} = require('../controllers/movie.controllers');

const Movie = require('../models/Movie');



router.get('/', getAllMovies);
router.get('/id/:id', getMovieById);
router.get('/title/:title', getMovieByTitle);
router.get('/genre/:genre', getMovieByGenre);
router.get('/year/:year', getMovieByYear);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);


module.exports = router;