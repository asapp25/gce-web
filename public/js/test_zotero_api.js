
const { default: api } = ZoteroApiClient;
import api from 'zotero-api-client';
//console.log(api);
const myapi = api().library('group', 6379466);

const response = await myapi.items().get();
//console.log(response)

const items = response.raw;





console.log(items.map(i => i.title));