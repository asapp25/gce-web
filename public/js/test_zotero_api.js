const { default: api } = ZoteroApiClient;

const response = api().library('group', 6379466).collections('9bcf7c2bde0d23ad').items().get();

const items = response.getData();

console.log(response)
console.log(items.map(i => i.title));