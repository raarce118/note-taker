const { urlencoded } = require('express');
const { db } = require ('./db/db.json')
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express ();
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes")


const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));


app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen( PORT,
    
   () => console.log(`Website Link: http://localhost:${PORT}`)); 
    
