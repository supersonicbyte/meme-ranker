const express = require('express');
const app = express();
const HttpError = require('./models/http-error');
const usersRoutes = require('./routes/users-routes');

const PORT = process.env.PORT || 4000;
// for JSON parsing
app.use(express.json());

// users route
app.use('/api/users', usersRoutes);

// for unsupported routes
app.use((req, res, next) => {
    const error = new HttpError('Could not find the route.', 404);
    throw error;
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));