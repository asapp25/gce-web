let jsonData;

window.addEventListener("load", () => {
    fetch("../json/Personnel.json")
    .then((res) => res.json())
    .then((data) => (jsonData = data))
    .catch((err) => console.log(err));
});

const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

console.log(searchParams.get("id"));