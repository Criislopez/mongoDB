const Movie = require('../models/Movie');


const getAllMovies= async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMovieById = async (req, res) => {
    const { id } = req.params;

    try {
        const movie = await Movie.findById(id);

        if (movie) {
            return res.status(200).json(movie);
        }

        return res.status(404).json('Movie not found');

    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMovieByTitle = async (req, res) => {
    const { title } = req.params;

    try {
        const movieByTitle = await Movie.find({ title });

        return res.status(200).json(movieByTitle);

    } catch (error) {
        console.error('ERROR BUSCANDO POR TÍTULO:', error);
        return res.status(500).json({
            message: 'Error buscando la película',
            error: error.message
        });
    }
};

const getMovieByGenre = async (req, res) => {
    const { genre } = req.params;

    try {
        const movieByGenre = await Movie.find({ genre });
        return res.status(200).json(movieByGenre);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getMovieByYear = async (req, res) => {
    const { year } = req.params;

    try {
        const movieByYear = await Movie.find({
            year: { $gt: year }
        });

        return res.status(200).json(movieByYear);

    } catch (error) {
        return res.status(500).json(error);
    }
};


const createMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        return res.status(201).json(newMovie);
    } catch (error) {
        return res.status(500).json('Error creando la película');
    }
}

const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true,
        });
        if(!updatedMovie){
            return res.status(404).json('Error actualizando la película')     
           };

           return res.status(200).json(updatedMovie); 

    } catch (error) {
        return res.status(500).json('Error actualizando la película');
    }
}

const deleteMovie = async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        return res.status(200).json('Película borrada correctamente');
        
    } catch (error) {
        return res.status(500).json('Error actualizando la película');
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    getMovieByGenre,
    getMovieByYear,
    createMovie, 
    updateMovie,
    deleteMovie,
}