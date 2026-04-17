
const { default: api } = ZoteroApiClient;

console.log(api);

const response = await api().library('group', 6379466).items().get();
console.log(response)

const items = response.raw;





console.log(items.map(i => i.title));