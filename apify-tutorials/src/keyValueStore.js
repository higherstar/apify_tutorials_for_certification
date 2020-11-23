const ApifyClient = require('apify-client');

const apifyClient = new ApifyClient({
       userId: 'z8iDmwXsHwA8Nm9A3',
       token: 'SukXDJtqA2MAAwjaQnttmfp3Y',
});
const keyValueStores = apifyClient.keyValueStores;
const store =  keyValueStores.getOrCreateStore({ storeName: 'mt-store' });
apifyClient.setOptions({ storeId: "MbK4GZnbpWY0zeuTq" });
 keyValueStores.putRecord({
     key: 'foo',
     body: 'bar',
     contentType: 'text/plain; charset=utf-8',
});
const record =  keyValueStores.getRecord({ key: 'foo' });
// const keys =  keyValueStores.getRecordsKeys();
// await keyValueStores.deleteRecord({ key: 'foo' });