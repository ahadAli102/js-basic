

function apiCall(url,callback){
    console.log('Fetching Data');
    callback('Data fetched complete');
}

apiCall('localhost:8080/employees',(response)=>{
    console.log(response);
})