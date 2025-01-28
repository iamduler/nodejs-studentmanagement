const logFeature = (req, res, next) => {
    console.log('This is a feature to get student list.');
    next(); // Chạy xuống middleware tiếp theo
};

module.exports = {
    logFeature
}