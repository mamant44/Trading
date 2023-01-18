require("dotenv").config()
const { Spot } = require('@binance/connector')

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
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))*/

    /*client.cancelOrder('1INCHUSDT', {
        recvWindow: 3000,
        orderId: 723252272
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))*/

   /* client.cancelOpenOrders('1INCHUSDT', {
        orderId: 723252272,
        side: 'BUY'
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))*/

    /*client.getOrder('1INCHUSDT', {
        orderId: 723252272
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))*/

    /*client.openOrders({})
        .then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))*/

    /*client.allOrders('USDTUAH', {
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))*/

    /*client.allOrders('1INCHUSDT', {
    }).then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error))*/

    client.account()
        .then(response => client.logger.log(response.data))
        .catch(error => client.logger.error(error.message))

    /*client.depositWithdrawalHistory(0)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))*/
}

run()