const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req,res) => {
res.send('this is app.js port');
});

app.listen(PORT,()=> {

console.log('%d aaaaa',PORT);
});

