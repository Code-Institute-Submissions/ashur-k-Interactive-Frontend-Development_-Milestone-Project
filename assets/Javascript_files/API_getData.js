'use strict'
const baseURL_get_date_country_history = "https://covid-193.p.rapidapi.com/history?day=";

function getCoronoData(cb)  {
  


const date = getDate();
const country = "UK" ;
    
  var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          cb(JSON.parse(this.responseText));


        }
    }
    xhr.open("GET", `${baseURL_get_date_country_history}${date}&country=${country}`);
    xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "e31173d748msh068eb1b2648d235p15ca87jsnc9dda1b88073");
    xhr.send(data);
}

//I have to get 3 data values no of total deaths, no of active cases and nos of critical cases

function printToDocument(){

    getCoronoData(function(data){
       data = data.response;


  console.log (data);
        let deaths = data[0].deaths.total;
         let active = data[0].cases.active;
          let criticalCases = data[0].cases.critical;
        
        
   

        //"2020-04-22"



        document.getElementById("deaths").innerHTML = deaths;
        document.getElementById("active_cases").innerHTML = active;
        document.getElementById("critical_cases").innerHTML = criticalCases;

    })
}

printToDocument();


function getDate() {
let today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

return today;

}


 document.getElementById("today_date").innerHTML = getDate(); 
