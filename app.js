var express = require('express');
var app = express();

require("./routes/api/route")(app);
require("./routes/www/route")(app);
require("./routes/commonRoute")(app);

app.listen(1337, function () {
    console.log('Server running at http://127.0.0.1:1337/');
});