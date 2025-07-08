const express = require('express');
const port = 3001; 
const mongoose = require('mongoose'); 
const bookRouter = require('./routers/bookRouter');
const cors = require('cors');

const app = express();
app.use(express.static('public'));
app.use(express.json()); 
app.use(cors());
app.use(bookRouter)

app.listen(port, (err) => {
if (err) {
    console.log(err);
}else { 
    console.log(`Le serveur est lancé sur le port ${port}`);
}
}
);

mongoose.connect('mongodb://localhost:27017/booksMu')

app.get('/', (req, res) => {
    res.json({ message: 'Bonjour monde!' })
}
); 