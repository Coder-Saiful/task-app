const { createClient } = require("redis");

const redisCilent = createClient({
    host: 'localhost',
    port: 6379
});

redisCilent.on('error', (err) => {
    console.log('Radis client error:', err);
});

redisCilent.connect(() => {
    console.log("Connected to Redis...")
});

export {redisCilent}