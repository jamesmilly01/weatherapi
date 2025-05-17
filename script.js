document.getElementById("button-addon2").addEventListener("click", function(){
    const city = document.getElementById("city").value;
    if(!city){
         alert("please enter a city name to search");
        return;
    }
    const apiKey = "4533d9fe72f167aeb4583b46bbec8071";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url).then(Response =>{
        if(!Response.ok){
            alert("city not found");
            return;
        }
        return Response.json();

    }).then(data => {
        updateWeather(data);
    }).catch(err => {
        alert(err.message);
    })
       

});
function updateWeather(data){
    document.querySelector("h2").textContent = data.name;
    const rows = document.querySelectorAll("dd");
    rows[0].textContent = `${data.main.temp}°C`;
    rows[1].textContent = `${data.main.humidity}%`;
    rows[2].textContent = `${data.wind.speed}m/s`;
    rows[3].textContent = `${data.wind.deg}°`;
    rows[4].textContent = `${data.main.pressure}hPa`

    const weathers = data.weather[0].main.toLowerCase();
    const section = document.getElementById("weather");
    let imgurl = "";

    if (weathers.includes("cloud")) {
        imgurl = "url('images/clouds.jpg')";
    } else if (weathers.includes("rain")) {
        imgurl = "url('images/clouds.jpg')";
    } else if (weathers.includes("clear")) {
        imgurl = "url('images/sunny.jpg')";
    } else if (weathers.includes("snow")) {
        imgurl = "url('images/snowfall.jpg')";
    } else {
        imgurl = "url('images/clearday.jpg')";
    }

    section.style.backgroundImage = imgurl;
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center center";
    section.style.backgroundRepeat = "no-repeat";

    
}