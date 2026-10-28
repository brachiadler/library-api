const express = require('express');
const { books, users } = require('./db');
const cors = require('cors');
const morgan = require('morgan');

const {
    currentDate,
    errorHandler,
    notFound
} = require('./middlewares');

const userRoutes = require('./routes/user.route');

const app = express();
const PORT = 3000;

// Middlewares רגילים
app.use(cors());
app.use(express.json());
app.use(currentDate);

// Morgan - רק במצב פיתוח
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.all('/', (req, res) => {
    res.send('Library RESTful API Service is Running');
});

app.use('/users', userRoutes);

// Middlewares לטיפול בשגיאות
app.use(notFound);
app.use(errorHandler);

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});