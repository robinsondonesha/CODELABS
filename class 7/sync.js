const apiReq ={
    success: Math.random() < 0.5,
    data: 'Data'
}

const mydata = new Promise ((resolve, reject) => {
    if (apiRec.sucess) {
      resolve(apiReq.date);
    } else {
        reject(new Error('Failed'));
});

mydata.then((done) => console.log('Done: ', done))
.catch((error) => {
    console.log('Error: ', error);
});