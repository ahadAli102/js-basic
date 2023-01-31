function getDataFomApi(url,size) {
    return new Promise((resolve,reject) => {
        if(size <= 0){
            reject('Size is insuficient')
        }
        else{
            resolve('Data fetch succesfull');
        }
    });
}

getDataFomApi('localhost:8080/employees',1).then((response) => {
    console.log(response);
}).catch((reason) =>{
    console.log(reason);
}).finally(()=>{
    console.log('Complete');
});