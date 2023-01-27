require("dotenv").config()
const {Spot} = require('@binance/connector');

const workEnv = [process.env.API_KEY, process.env.SECRET_KEY]

const TRADE_USDT_QUANTITY = 11;
const USDT_UAH_SELL_PRICE = 40.30;
const USDT_UAH_BUY_PRICE = 40.09;
const DEFAULT_CURRENT_PRICE = 0;
const USDT_UAH = 'USDTUAH';
const TIME_IN_FORCE = {
    timeInForce: 'GTC'
}

const createSellOrder = ({quantity, client}) => {
    client.newOrder(USDT_UAH, 'SELL', 'LIMIT', {
        quantity,
        TIME_IN_FORCE
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))
}

const createBuyOrder = ({quantity, client}) => {
    client.newOrder(USDT_UAH, 'BUY', 'LIMIT', {
        quantity,
        TIME_IN_FORCE
    }).then(response => console.log(response.data))
        .catch(error => console.log(error))
}

let currentPrice = DEFAULT_CURRENT_PRICE;
/*let currentStateOrder;*/

const client = new Spot(...workEnv)

const trade = () => {
    const callbacks = {
        open: () => console.log('Connected with Websocket server'),
        close: () => console.log('Disconnected with Websocket server'),
        message: data => {
            currentPrice = JSON.parse(data).p
            console.log("currentPrice: ", currentPrice)
        }
    }

    client.aggTradeWS(USDT_UAH, callbacks)

    setInterval(() => {

        const callbacks = {
            open: () => console.log('Connected with Websocket server'),
            close: () => console.log('Disconnected with Websocket server'),
            message: data => {
                /*currentStateOrder = JSON.parse(data).m
                console.log(currentStateOrder)*/
                console.log(data)
            }
        }

        client.tradeWS(USDT_UAH, callbacks)

        if (currentPrice <= USDT_UAH_BUY_PRICE) {
                createBuyOrder({quantity: TRADE_USDT_QUANTITY, client});
                console.log("buy order created", currentPrice);
        }

        if (currentPrice >= USDT_UAH_SELL_PRICE) {
                createSellOrder({quantity: TRADE_USDT_QUANTITY, client});
                console.log("sell order created", currentPrice);
        }
    }, 1)
}

trade()