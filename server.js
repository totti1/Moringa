const express = require('express');
const app = express();
const path = require('path');

// viewed at http://localhost:8080
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.set('PORT', process.env.PORT || 8080);
app.listen(app.get('PORT'), function(error) {
	console.log('Server running at 8080');
});
