const ApifyClient = require('apify-client');

const apifyClient = new ApifyClient({
 userId: 'z8iDmwXsHwA8Nm9A3',
 token: 'SukXDJtqA2MAAwjaQnttmfp3Y',
});

// Awaited promise
try {
     const tasksList =  apifyClient.tasks.listTasks({});
     console.log(tasksList)
     // Do something with the tasksList ...
} catch (err) {
    console.log(err)
     // Do something with error ...
}

// Promise
apifyClient.tasks.listTasks({})
.then((tasksList) => {
    console.log(tasksList)
     // Do something tasksList ...
})
.catch((err) => {
    console.log(err)
     // Do something with error ...
});

// Callback
apifyClient.tasks.listTasks({}, (err, tasksList) => {
     // Do something with error or tasksList ...
});