const ApifyClient = require('apify-client');

const apifyClient = new ApifyClient({
 userId: 'z8iDmwXsHwA8Nm9A3',
 token: 'SukXDJtqA2MAAwjaQnttmfp3Y',
});

// Awaited promise
try {
     const webhooks =  apifyClient.webhooks.listWebhooks({});
     console.log(webhooks)
     // Do something with list ...
} catch (err) {
    console.log(err)
     // Do something with error ...
}

// Promise
apifyClient.webhooks.listWebhooks({})
.then((webhooksList) => {
    console.log(webhooksList)
     // Do something with list ...
})
.catch((err) => {
    console.log(err)
     // Do something with error ...
});

// Callback
apifyClient.webhooks.listWebhooks({}, (err, webhooksList) => {
    console.log(err, webhooksList)
     // Do something with error or list ...
});