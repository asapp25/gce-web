
const { default: api } = ZoteroApiClient;
//import api from ZoteroApiClient;
//console.log(api);
const myapi = api().library('group', 6379466);

const response =  myapi.items().get();
console.log(response)

const items = response.getData();





console.log(items.map(i => i.title));