const ApifyClient = require('apify-client');

const apifyClient = new ApifyClient({
       userId: 'z8iDmwXsHwA8Nm9A3',
       token: 'SukXDJtqA2MAAwjaQnttmfp3Y',
});
const datasets = apifyClient.datasets;
const dataset = datasets.getOrCreateDataset({
    datasetName: 'my-dataset',
});
console.log(dataset)
apifyClient.setOptions({ datasetId: "xog9QUvtjffv2Fp60" });
try {
    const items = datasets.getItems();
    console.log(items)
    // Do something with the items ...
} catch (err) {
    console.log(err)
    // Do something with error ...
}

// Promise
datasets.getItems()
.then((paginationList) => {
    console.log(paginationList.items)
    paginationList.items.map((item,index) => (
        console.log(index,item)
    ));
    // Do something with items ...
})
.catch((err) => {
    console.log(err)
    // Do something with error ...
});

// Callback
datasets.getItems((err, paginationList) => {
    console.log(paginationList.items)
    console.log(err)
    // Do something with error or items ...
});