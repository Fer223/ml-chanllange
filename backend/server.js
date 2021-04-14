const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

const PORT = 3001;

app.use(cors());

app.get('/items', (req, res) => {
    axios({
        method: 'get',
        url: `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`,
        responseType: 'stream'
    }).then(response => {
        response.data.pipe(res);
    })
})

app.get('/items/:id/description', (req, res) => {
    const descriptionApiCall = axios({
        method: 'get',
        url: `https://api.mercadolibre.com/items/${req['params'].id}/description`,
    });
    const itemApiCall = axios({
        method: 'get',
        url: `https://api.mercadolibre.com/items/${req['params'].id}`,
    });

    axios.all([descriptionApiCall, itemApiCall])
        .then(
            axios.spread((...responses) => {
                responses[0].data.pictures = responses[1].data.pictures;
                res.send(responses[0].data);
            })
        );
})

app.listen(PORT, () => {
    console.log('Express is listening on port ', PORT)
})
