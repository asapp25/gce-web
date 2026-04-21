async function fetchPersonnelBioData() {
    const url = '../public/json/personnelBio.json';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

        }
        // parse the response
        const jsonData = await response.json();
        console.log(jsonData);


        /* window.addEventListener("load", () => {
            fetch("../public/json/personnelBio.json")
            .then((res) => res.json())
            .then((data) => (jsonData = data))
            .catch((err) => console.log(err));
        });
         */
        const paramsString = window.location.search;
        const searchParams = new URLSearchParams(paramsString);

        const id = searchParams.get("id");

        id.replace('-', '_');
        id.replace('.', '_');

        console.log(id);
        

        const user = jsonData[id];

        console.log(user);


        const nametxt = user.FriendlyName;
        const email = user.Email;
        const roleName = user.RoleName;

        const name_div = document.getElementById('name');
        name_div.appendChild(nametxt);

        //onsole.log(searchParams.get("id"));

    } catch (error) {
        console.error('error ',error);
    }
}
fetchPersonnelBioData();