import Head from 'next/head'
import APIForm from "../auth";
import ListOrders from "../orders";

export default function Home() {

  return (
    <>
      <Head>
        <title>Trading BOT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
          <APIForm/>
          <ListOrders/>
      </main>
    </>
  )
}