require("dotenv").config()
const {Spot} = require('@binance/connector')

const SALE_CONFIG = {
    symbol: 'USDTUAH',
    side: 'SELL',
    type: 'LIMIT',
    timeInForce: 'GTC',
    quantity: 15,
    price: 37.50
}

const BUY_CONFIG = {
    symbol: 'USDTUAH',
    side: 'BUY',
    type: 'LIMIT',
    timeInForce: 'GTC',
    quantity: 15,
    price: 37.25
}

const workEnv = [process.env.API_KEY, process.env.SECRET_KEY]

const run = () => {
    const client = new Spot(...workEnv)

    /*client.newOrder('USDTUAH', 'BUY', 'LIMIT', {
        price: '10',
        quantity: 1,
        timeInForce: 'GTC'
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))*/

    /*client.cancelOrder('USDTUAH', {
        recvWindow: 3000,
        orderId: 723252272
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))*/

   /* client.cancelOpenOrders('USDTUAH', {
        orderId: 723252272,
        side: 'BUY'
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))*/

    /*client.getOrder('USDTUAH', {
        orderId: 723252272
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))*/

    /*client.openOrders({})
        .then(response => console.log(response.data))
        .catch(error => console.log(error))*/

    /*client.allOrders('USDTUAH', {
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))*/

    /*client.allOrders('USDTUAH', {
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))*/

    client.account()
        .then(response => console.log(response.data))
        .catch(error => console.log(error.message))

    /*client.depositWithdrawalHistory(0)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))*/
}

run()