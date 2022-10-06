

document.querySelector("#search").addEventListener("click",cityName);

function cityName(){
    let city_name=document.querySelector("#city_name").value;
    console.log(city_name)
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=d2679a22a98de2e3e4b7c7ddffaba9ad`

    fetch(url).then(function (res){
        return(res.json())
    }).then(function(res){
        
        console.log(res);
        apend(res);
    })
}

function apend(data){
    let url=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    let container1=document.querySelector(".container1")
 container1.innerHTML=null
    let h2=document.createElement("h2");
    h2.innerText=`City name-:  ${data.name}`;
    let h3=document.createElement("p");
    h3.innerText=`min temprature-: ${data.main.temp_min}`;
    let h4=document.createElement("p");
    h4.innerText=`max temprature-: ${data.main.temp_max}`;
    let wind_speed=document.createElement("p");
    wind_speed.innerText=`Wind speed-: ${data.wind.speed} mph`;
    let sunrise=document.createElement("p");
    sunrise.innerText="Sunrise-: 05:27"
    let sunset=document.createElement("p");
    sunset.innerText="Sunset-: 07:18"

 container1.append(h2,h3,h4,wind_speed,sunrise,sunset)
 let iframe=document.querySelector("#gmap_canvas");
 iframe.src=url;
}

function getlocation(){
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        const crd = pos.coords;
      
        // console.log('Your current position is:');
        // console.log(`Latitude : ${crd.latitude}`);
        // console.log(`Longitude: ${crd.longitude}`);
        // console.log(`More or less ${crd.accuracy} meters.`);
        currLocation(crd.latitude,crd.longitude)
      }
}

window.addEventListener("load",function(){
    getlocation();
})

// let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d2679a22a98de2e3e4b7c7ddffaba9ad`


function currLocation(lat,lon){
   
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d2679a22a98de2e3e4b7c7ddffaba9ad`

    fetch(url).then(function (res){
        return(res.json())
    }).then(function(res){
        
        console.log(res);
        apend(res);
    })
}