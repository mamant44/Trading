import client from "@binance/connector/src/APIBase";
import {Spot} from "@binance/connector";


export default async function handler(req, res) {
    const {apiKey, secretKey} = req.body;
    const client = new Spot(process.env.API_KEY, process.env.SECRET_KEY)

    const accounts = await client.account()
  res.status(200).json({accounts: accounts.data })
    console.log(accounts);
}