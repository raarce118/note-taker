const { urlencoded } = require('express');
const express = require('express');
const app = express ();
const apiRoutes = require("/routes/api-routes");


const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));


app.use('/api', api-routes)

app.listen( PORT,
    
   () => console.log(`Website Link http://localhost:${PORT}`)); 
    
