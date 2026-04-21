let jsonData;

window.addEventListener("load", () => {
    fetch("./json/personnelBio.json")
    .then((res) => res.json())
    .then((data) => (jsonData = data))
    .catch((err) => console.log(err));
});

const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

const id = searchParams.get("id");

const user = jsonData.find(item = item.NameID == id);

const nametxt = user.FriendlyName;
const email = user.Email;
const roleName = user.RoleName;

const name_div = document.getElementById('name').appendChild(nametxt);

console.log(searchParams.get("id"));