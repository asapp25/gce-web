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
        const piList = document.getElementById('pi-table')
        const gsList = document.getElementById('gs-table')
        const psList = document.getElementById('ps-table')
        const adminList = document.getElementById('admin-table')
        const aiList = document.getElementById('ai-table')
        const opList = document.getElementById('op-table')
        //var pi_json = [];
        userData.forEach(element => {
            const tableItem = document.createElement('tr');
            tableItem.style.fontSize = "10pt";
            tableItem.classList.add("table-light");
            


            const category = element.Category;

            const friendName = element.FriendlyName;
            const webCaption = element.WebCaption;
            const email = element.Email;           
            const nameID = element.NameID;

            
            
            console.log(category);


            
            const baseUrl = "https://gce-lter.marsci.uga.edu/public/app/personnel_bios.asp";
            

            tableItem.innerHTML += '<td scope="row"><a href="' + baseUrl + '?id=' + nameID + '">' + friendName +  '</a></td><td>' + webCaption + '</td><td><a href="mailto:' + email + '">' + email + '</a>'

            if(category == "Investigators"){
                //pi_json.push(element);
                piList.append(tableItem);
            } 

            if(category == "Graduate Students"){
                //pi_json.push(element);
                gsList.append(tableItem);
            } 

            if(category == "Staff"){
                //pi_json.push(element);
                psList.append(tableItem);
            } 

            if(category == "Admin"){
                //pi_json.push(element);
                adminList.append(tableItem);
            } 
            
            if(category == "Affiliates"){
                //pi_json.push(element);
                aiList.append(tableItem);
            } 

            if(category == "Other Affiliates"){
                //pi_json.push(element);
                opList.append(tableItem);
            } 
           
            //console.log( pi_json);
            //console.log(element.data.publicationTitle)
        });

    } catch (error) {
        console.error('error fetching json:', error);
        document.getElementById('personnel-list').innerHTML = '<li>Error loading data</li>';
    }
    //console.log(pi_json);
    //return pi_json;
}

fetchAndDisplayPersonnelData();
