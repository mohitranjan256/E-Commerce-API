const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose.set('strictQuery', false);
mongoose.connect(
    `mongodb+srv://coolmohit256:Mohit1234@cluster0.l190idm.mongodb.net/?retryWrites=true&w=majority`
    ).then(()=>
        app.listen( 5000,() => console.log(`Connection Sucessful and Server is running on http://localhost:${PORT} `))
    )
    .catch((err)=>console.log(error.message()));

app.use(bodyParser.json());

const def = require('./routes/default');
const prRoutes = require('./routes/pr_routes.js');
const varRoutes = require('./routes/var_routes.js');
const search= require('./routes/search.js')

app.use('/', def);

app.use('/products', prRoutes);
app.use('/products/:prId/var', varRoutes);
app.use('/search',search);
