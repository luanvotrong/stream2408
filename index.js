const express = require('express');

const app = express();
app.set('view engine', 'ejs');
//app.set('/', './public');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.listen(3005, () => console.log('Server started'));