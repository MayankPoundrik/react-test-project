export function getEmployee(callback){
    fetch(`http://dummy.restapiexample.com/api/v1/employees`)
    .then(response => response.json())
    .then(json =>{  callback(json.data)})
}