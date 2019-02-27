const express = require('express');

// Initializations
const app = express();

// Settings
app.set('port', 3000);

// Server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});