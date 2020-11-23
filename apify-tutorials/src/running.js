const Apify = require('apify');
const express = require('express');

const app = express();
const port = process.env.APIFY_CONTAINER_PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Web server is listening
    and can be accessed at
    ${process.env.APIFY_CONTAINER_URL}!`));

Apify.main(async () => {
    // Let the actor run for an hour.
    await Apify.utils.sleep(60 * 60 * 1000);
});