const Apikey="c9475cc2f69d0239a11810940ed68ce5";
const AupiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const serachBOX=document.querySelector(".search input")
const serachBtn=document.querySelector(".search button")
const weatheIcon=document.querySelector(".weather-icon")
// const cardcolour=document.querySelector(".card");

async function cheakweather(city){
    const response=await fetch(AupiUrl +city+ `&appid=${Apikey}`);
   var data= await response.json();
   console.log(data);
   document.querySelector(".city").innerHTML=data.name;
   document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C ";//by adding math .round temprature will be visible  in integer value
   document.querySelector(".Wind").innerHTML=data.wind.speed +"Km/h";
   document.querySelector(".humidity").innerHTML=data.main.humidity+"%";

   if(data.weather[0].main=="Clear"){
    weatheIcon.src="clear.png"
    
   }
   else if(data.weather[0].main=="Clouds"){
    weatheIcon.src="clouds.png"
   }
   else if(data.weather[0].main=="Rain"){
    weatheIcon.src="rain.png"
   }
   else if(data.weather[0].main=="Drizzle"){
    weatheIcon.src="drizzle.png"
   }
   else if(data.weather[0].main=="Mist"){
    weatheIcon.src="mist.png"
   }
}

serachBtn.addEventListener("click",()=>{
    cheakweather(serachBOX.value);
})
