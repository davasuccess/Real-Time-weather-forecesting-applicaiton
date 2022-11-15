let loc =document.getElementById("location");
let tempicone = document.getElementById("temp-icon");
let temvalue = document.getElementById("tempvalue");
let climate =  document.getElementById("climate");
let iconfile;
const searchInpu = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

alert("hello");




window.addEventListener("load" ,()=>{
    alert("welcome");
let log;
let lat;
if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) =>
        {

        log= position.cords.longitude;
        lat= position.cords.latitude;
        const proxy="https://www.npmjs.com/package/cors-anywhere"; 

        const api =`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid={74519440c374face4a32032ef41e46aa}`
            
        fetch(api).then((response) =>{

            return response.json();

        })
        .then(data =>){

            const{name} = data;
            const{feels_like}= data.main;
            const{id, main} = data.weather[0];

                 loc.textContent= name;
                 climate.textContent= main;
                 tempvalue.textContent= math.round(feels_like-273);


        }
      
        }
    }

})