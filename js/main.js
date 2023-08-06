let locationNameInput = document.getElementById("locationName");
let cityInfo = [];
async function getWith() {
  let cityName = locationNameInput.value;
  let Weath = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${cityName}&days=3`);
  cityInfo = await Weath.json();
  console.log(cityInfo.current.condition.icon)
  showData();
}


function getDayName(date = new Date(), locale = "en-US") {
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function getMonthName(date = new Date(), locale = "en-US") {
    return date.toLocaleDateString(locale, { month: "long" , day : "numeric" });
  }

function showData() {
  let temp = "";

  var wethDay = new Date();



  temp = `

<div  class="col-md-4 bg-light-subtle g-0 rounded-start-3 rounded-start-3 first-div overflow-hidden"> 
              
             
<div class=" p-2 px-4 bg-light d-flex justify-content-between"><span>${getDayName(new Date(cityInfo.forecast.forecastday[0].date))}</span><span>${getMonthName(new Date(cityInfo.forecast.forecastday[0].date))}</span></div>
<div class="p-4 text-start">
  <h5>${cityInfo.location.name}</h5>
  <div class="d-flex justify-content-between align-items-center "><h1 class="d-bold fw-bold">${cityInfo.current.temp_c}<sup>o</sup>C</h1><span><img src="http://${cityInfo.current.condition.icon}"></span></div>
  <h5 class="text-warning py-2">${cityInfo.current.condition.text}</h5>
  <div class="d-flex justify-content-between px-2">
  <span><img src="images/icon-umberella.png"> ${cityInfo.current.humidity}%</span>
  <span><img src="images/icon-wind.png"> ${cityInfo.current.wind_kph} km/h</span>
  <span><img src="images/icon-compass.png"> ${cityInfo.current.wind_dir}</span>
 </div>
</div>
</div>

<div  class="col-md-4 bg-light g-0">


    <div class=" bg-danger p-2 bg-light-subtle "><span>${getDayName(new Date(cityInfo.forecast.forecastday[1].date))}</span></div>
   
      <div class="d-flex flex-column gap-2 p-5">
        <div class="forecast-icon">
            <img src="https://${cityInfo.forecast.forecastday[1].day.condition.icon}" alt="" width="48">
        </div>
        <div class="fw-bold fs-4">${cityInfo.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
        <small class="fw-semibold fs-5 text-secondary">${cityInfo.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
        <div class="text-warning">${cityInfo.forecast.forecastday[1].day.condition.text}</div>
    </div>
    
  

</div> 

<div class="col-md-4 bg-light-subtle g-0 rounded-end-3 overflow-hidden therd-div">

 <div class=" bg-danger p-2 bg-light "><span>${getDayName(new Date(cityInfo.forecast.forecastday[2].date))}</span></div>
   
      <div class="d-flex flex-column gap-2 p-5">
        <div class="forecast-icon">
            <img src="https://${cityInfo.forecast.forecastday[2].day.condition.icon}" alt="" width="48">
        </div>
        <div class="fw-bold fs-4">${cityInfo.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
        <small class="fw-semibold fs-5 text-secondary">${cityInfo.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
        <div class="text-warning">${cityInfo.forecast.forecastday[2].day.condition.text}</div>
    </div>
</div>


`;
  document.getElementById("showData").innerHTML = temp;
}
