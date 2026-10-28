// מוסיף לאובייקט הבקשה את התאריך הנוכחי
const currentDate = (req, res, next) => {
    req.current_date = new Date();
    next();
};

// Middleware לטיפול בשגיאה כללית
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;

    res.status(status).json({
        error: err.message,
        type: err.type || "server error"
    });
};

// Middleware לטיפול בנתיב שלא נמצא
const notFound = (req, res, next) => {
    const err = new Error("Route not found");
    err.status = 404;
    err.type = "not found";
    next(err);
};

module.exports = {
    currentDate,
    errorHandler,
    notFound
};