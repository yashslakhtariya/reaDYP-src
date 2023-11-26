let express = require("express");
let app = express();
let port = 4200;

app.use(express.static('dist/readyp'));

app.listen(port, function () {
     console.log(`\nFrontend is being started on ${port}`);
});
