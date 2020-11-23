const ApifyClient = require('apify-client');

const apifyClient = new ApifyClient({
       userId: 'z8iDmwXsHwA8Nm9A3',
       token: 'SukXDJtqA2MAAwjaQnttmfp3Y',
});
const keyValueStores = apifyClient.keyValueStores;

const store =  keyValueStores.getOrCreateStore({ storeName: 'mt-store' });
apifyClient.setOptions({ storeId: "yXnwXcH3zyospYSUQ" });

// ed promise
try {
    const record =  keyValueStores.getRecord({ key: 'foo' });
    console.log(record)
    // Do something record ...
} catch (err) {
    console.log(err)
    // Do something with error ...
}

// Promise
keyValueStores.getRecord({ key: 'foo' })
.then((RECORD) => {
    console.log(RECORD)
    // Do something record ...
})
.catch((err) => {
    console.log(err)
    // Do something with error ...
});

// Callback
keyValueStores.getRecord({ key: 'foo' }, (err, record) => {
    // Do something with error or record ...
});
