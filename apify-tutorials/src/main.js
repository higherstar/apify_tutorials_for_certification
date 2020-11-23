const ApifyClient = require('apify-client');

const apifyClient = new ApifyClient({
 userId: 'z8iDmwXsHwA8Nm9A3',
 token: 'SukXDJtqA2MAAwjaQnttmfp3Y',
});

// ed promise
try {
     const actors =  apifyClient.acts.listActs({});
     console.log(actors)
     // Do something actors list ...
} catch (err) {
    console.log(err)
     // Do something with error ...
}

// Promise
apifyClient.acts.listActs({})
.then((actsList) => {
    console.log(actsList)
     // Do something actsList ...
})
.catch((err) => {
    console.log(err)
     // Do something with error ...
});

// Callback
apifyClient.acts.listActs({}, (err, actsList) => {
    console.log(err);
    console.log(actsList);
     // Do something with error or actsList ...
});