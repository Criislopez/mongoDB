const express = require('express');
const { connect } = require('./utils/db');
const movieRoutes = require('./routes/movie.routes');


const server = express();

server.use(express.json());

connect();

server.use('/movies', movieRoutes);


const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running in <http://localhost>:${PORT}`);
});