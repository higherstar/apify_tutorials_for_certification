const Apify = require('apify');

Apify.main(async () => {
    const { keyValueStores } = Apify.client;

    // Get store with name 'example-counter'.
    const store = await keyValueStores.getOrCreateStore({
        storeName: 'example-counter',
    });

    // Get counter state record from store.
    const record = await keyValueStores.getRecord({
        key: 'counter',
        storeId: store.id,
    });

    // If there is no such record then start from zero.
    let counter = record ? record.body : 0;

    // Increase counter, print and set as output.
    counter++;
    console.log(`Counter: ${counter}`);
    Apify.setValue('OUTPUT', counter);

    // Save increased value back to store.
    await keyValueStores.putRecord({
        storeId: store.id,
        key: 'counter',
        // Record body must be a string or buffer!
        body: counter.toString(),
    });
});