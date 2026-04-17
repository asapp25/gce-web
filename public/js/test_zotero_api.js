const { default: api } = ZoteroApiClient;

const response = api().library('group', 6379466).items().get();
console.log(response)
const items = response.getLinks();


console.log(items.map(i => i.title));