const express = require('express');
const app = express();
app.get('/',(req,res) => {
res.send('okkk index.js');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> {

console.log('%d aaaaa',PORT);
});
