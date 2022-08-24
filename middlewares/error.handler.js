function logErrors(error, req, res, next) {
    console.log(error);
    next(error);
}

function boomErrorHandler(error, req, res, next) {
    if (error.isBoom) {
        const { statusCode, payload } = error.output;
        res.status(statusCode).json(payload);
    }
    next(error);
}

function errorHandler(error, req, res, next) {
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    });
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
