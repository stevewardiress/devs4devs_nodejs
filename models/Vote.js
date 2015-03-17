module.exports = function(app) {

    var mongoose = app.mongoose;

    var vote = mongoose.Schema(
        {
            rating: {type: Number, min:1, max: 5},
            comments: {type: String, trim: true}
        }
    );

    return mongoose.model('Vote', vote);
};