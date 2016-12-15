const express = require('express');
const app = express();

const site = "hotswapheroes";
const port = 8002;

app.use(express.static(__dirname));

app.listen(port, function(){
	console.log(site, "listening on port", port);
});
