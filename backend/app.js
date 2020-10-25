const express = require('express');
const app = express();
const HttpError = require('./models/http-error');
const usersRoutes = require('./routes/users-routes');
const postsRoutes = require('./routes/posts-routes');

const PORT = process.env.PORT || 4000;
// for JSON parsing
app.use(express.json());

// routes
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);

// making uploads public 
app.use(express.static(__dirname + '/uploads'));

// for unsupported routes
app.use((req, res, next) => {
    const error = new HttpError('Could not find the route.', 404);
    res.send(error);
});


app.listen(PORT, () =>{ 
    console.log(`Server running on port ${PORT}`)});