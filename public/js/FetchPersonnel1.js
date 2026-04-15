//function to fetch personnel json file and display
async function fetchAndDisplayPersonnelData(){
    const url = '../public/json/Personnel.json';

    try {
        //fetch the data for the personnel json file
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);

        }
        // parse the response
        const userData = await response.json();
        
        //const gradList = document.getElementById('grad-table')
        //const piList = document.getElementById('pi-table')

        userData.forEach(element => {
            //const listItem = document.createElement('li');
            const roleCode = element.RoleCode;

            //const friendName = element.FriendlyName;
            //const webCaption = element.WebCaption;
            //const email = element.Email;           
            //const nameID = element.NameID;

            
            
            // console.log( element);


            
            //const baseUrl = "https://gce-lter.marsci.uga.edu/public/app/personnel_bios.asp";
            

            //listItem.innerHTML += '<a href="'  + baseUrl + '?id=' + nameID + '"> ' + friendName + '</a>, ' + webCaption + 'email: ' + email + '. ' 

            if(roleCode == "COPI"){
                if(!Array.isArray(pi_json) || !pi_json.length) {
                    
                    var pi_json = element;
                } else {
                    pi_json.push(element);
                }                
            } 
            
           //if(roleCode == "GSP"){
            //    gradList.appendChild(listItem);
            //}

            
            


            
            //console.log( pi_json);
            //console.log(element.data.publicationTitle)
        });

    } catch (error) {
        console.error('error fetching json:', error);
        document.getElementById('personnel-list').innerHTML = '<li>Error loading data</li>';
    }
    console.log( pi_json);
    return pi_json;
}

fetchAndDisplayPersonnelData();
