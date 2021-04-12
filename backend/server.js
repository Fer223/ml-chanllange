const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const PORT = 3001;

app.get('/items', cors(), (req, res) => {
    axios({
        method: 'get',
        url: `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`,
        responseType: 'stream'
    }).then(response => {
        response.data.pipe(res);
    })
})

app.get('/items/:id/description', cors(), (req, res) => {
    axios({
        method: 'get',
        url: `https://api.mercadolibre.com/items/${req['params'].id}/description`,
        responseType: 'stream'
    }).then(response => {
        response.data.pipe(res);
    })
})

app.listen(PORT, () => {
    console.log('Express is listening on port ', PORT)
})
