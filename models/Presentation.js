module.exports = function(app) {

    var mongoose = app.mongoose;

    var vote = mongoose.Schema(
        {
            rating: {type: Number, min:1, max: 5},
            comments: {type: String, trim: true}
        }
    );

    var schema = mongoose.Schema(
        {
            name: {type: String, trim: true, required: true},
            description: {type: String, trim: true, required: true},
            votes: [vote]
        }
    );

    //  converts the schema object into a model object which can be used
    //  to create new instances of the Presentation
    return mongoose.model('Presentation', schema, 'Presentation');
};