let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp.value");
let climate  = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
// alert(window.location);

searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value ='';

})
// const getWeather= async (city) =>{
//     try{
//         let params = new URLSearchParams({
//             access_key:'bfdb4aaf2e7bd79e9978692ca307664f',
//             query:'Lokoja',
//             units: 'f'
//           });
//         const response = await fetch(`http://api.weatherstack.com/current?${params}`)
//         {mode: `cors`}
        

// const weatherData = await response.json();
// console.log(weatherData);
// const {name} = weatherData;
// const {feels_like} = weatherData.main;
// const{id,main} = weatherData.weather[0];
// loc.textContent= name;
// climate.textContent =main;
// tempvalue.textContent = Math.round(feels_like -273);

// if(id<300 && id > 200){
//     tempicon.src= ".icons/thunderstorm.svg"
// }
// else if(id<400 && id > 300){
//     tempicon.src= ".icons/cloud-solid.svg"
// }
            
// else  if(id<600 && id >500){
//     tempicon.src= ".icons/rain.svg"
// }
// else  if(id<700 && id > 600){
//     tempicon.src= ".icons/snow.svg"
// }
// else  if(id<800 && id > 700){
//     tempicon.src= ".icons/clouds.svg"
// }
// if(id==800){
//     tempicon.src= ".icons/clouds-and-sun.svg"
// }



// alert("welcome")
// console.log("is it working??")


// window.addEventListener("load" ,()=>{
// let long;
// let lat;


// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition((position) =>{

//         long= position.coords.longitude;
//         lat = position.coords.latitude;
//         let params = new URLSearchParams({
//             access_key:'bfdb4aaf2e7bd79e9978692ca307664f',
//             query:'Lokoja',
//             units: 'f'
//           });
//             // const proxy = "https://www.npmjs.com/package/cors-anywhere"
//             // const proxy = "https://cors-anywhere.herokuapp.com/";
//             const api =`${proxy}http://api.weatherstack.com/current?${params}`
//             fetch(api).then((response)=>{
//                 return response.json();
//             })
//             .then (data =>{
//                 document.write(api)
//                 console.log(api)
//                 const {name} =  data;
//                 const {fee_like} = data.main;
//                 const{id, main} = data.weather[0];

//                 loc.textContent =  name;
//                 climate.textContent =main;
//                 tampvalue.textContent =  Math.round(fee_like-273);
//                 if(id<300 && id > 200){
//                     tempicon.src= ".icons/thunderstorm.svg"
//                 }
//                else if(id<400 && id > 300){
//                     tempicon.src= ".icons/cloud-solid.svg"
//                 }
                            
//               else  if(id<600 && id >500){
//                     tempicon.src= ".icons/rain.svg"
//                 }
//               else  if(id<700 && id > 600){
//                     tempicon.src= ".icons/snow.svg"
//                 }
//               else  if(id<800 && id > 700){
//                     tempicon.src= ".icons/clouds.svg"
//                 }
//                 if(id==800){
//                     tempicon.src= ".icons/clouds-and-sun.svg"
//                 }
                
                
//                 console.log(data);


//             });
//         });
//     };
