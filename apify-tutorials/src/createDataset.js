const ApifyClient = require('apify-client');

const apifyClient = new ApifyClient({
       userId: 'z8iDmwXsHwA8Nm9A3',
       token: 'SukXDJtqA2MAAwjaQnttmfp3Y',
});
const datasets = apifyClient.datasets;

// Get dataset with name 'my-dataset' and set it as default
// to be used in following commands.
const dataset = await datasets.getOrCreateDataset({
    datasetName: 'my-dataset',
});
apifyClient.setOptions({ datasetId: dataset.id });

// Save some object and array of objects to dataset.
await datasets.putItems({
     data: { name: 'Bar' }
});
await datasets.putItems({
     data: [{ name: 'Hotel' }, { name: 'Restaurant' }],
});

// Get items from dataset and delete it.
const paginationList = await datasets.getItems();
const items = paginationList.items;

// await datasets.deleteDataset();