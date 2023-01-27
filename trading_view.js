/*https://ru.tradingview.com/chart/USDTUAH/Q6M8BNQM-1/*/

const axios = require("axios");
require("dotenv").config()

axios.get('https://ru.tradingview.com/chart/USDTUAH/Q6M8BNQM-1/').then(function (error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', JSON.parse(response.headers));
    console.log('Response:', body);
})