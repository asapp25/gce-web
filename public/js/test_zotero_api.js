const { default: api } = ZoteroApiClient;

const response = api().library('group', 6379466).items().get();

const items = response.getData();

console.log(response)
console.log(items.map(i => i.title));