const express = require('express')
const cors = require('cors');
const app = express();
const CoinGecko = require('coingecko-api');

const server = require('http').Server(app)

const CoinGeckoClient = new CoinGecko();

app.use(cors())

const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200']
    }
})


io.on('connection', (socket) => {
    console.log('hello ! bro');

    setInterval(async () => {
        const allDataBTC = await CoinGeckoClient.coins.fetchMarketChart('bitcoin');
        const allDataETH = await CoinGeckoClient.coins.fetchMarketChart('huobi-btc');

        const pricesBTC = allDataBTC.data.prices
        const pricesETC = allDataETH.data.prices

        socket.emit('push', {
            data: [
                { name: 'BTC', prices: pricesBTC },
                { name: 'ETH', prices: pricesETC }
            ]
        });

    }, 3000)

})

server.listen(3000, () => console.log('Ready!'))
