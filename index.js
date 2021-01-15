const express = require('express'); 

const app = express();

const port = process.env.PORT || '3000';

const response = {
    message: 'Prueba Api Pipeline',
    dev: 'Dancko Concha Manzor',
    po: 'Javier caceres'
}

app.get('/', (req, res) => {
res.send(response);
});

app.listen(port, () => {

console.log(`listening at http://localhost:${port}`);

});