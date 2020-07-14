const express = requier('express');

const app = express();

app.get('/', (req, res) =>{
   res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})