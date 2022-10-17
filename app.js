//GET ALL THE DOM AND PARAMETERS NEEDED

const input = document.querySelector("input");
const button = document.querySelector("button");
const place = document.querySelector(".place");
const temperature = document.querySelector(".temperature");
const temperature1 = document.querySelector(".temperature1");
const described = document.querySelector(".description");
const icons = document.querySelector(".icons");
const humid = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const apiKey = "1f613a2b25bc576a3d90e51386ee84dd";
const day = document.querySelector(".day");
const hrs = document.querySelector(".hrs");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");
const yr = document.querySelector(".year");
const mnth = document.querySelector(".month");
const dateEL = document.querySelector(".date");
const weekday = document.querySelector(".weekday");
const placeName = document.querySelector(".placeName");
const body = document.querySelector("body");



//MAKE THE USER INPUT TO LOAD AND SHOW REAL-TIME AS THEY TYPE IN VALUES

const update = input.addEventListener("input",() =>{
    place.textContent = `The weather in ${input.value.toUpperCase()}`
    placeName.textContent = `${input.value.toUpperCase()}`;
})

//FUNCTION THAT RUNS WHEN USER INPUTS VALUE INTO THE FORM INPUT

const loadWeather = async() => {
    const cityName = input.value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    const res = await fetch(api);
    const data = await res.json();
    
    displayWeather(data);
}

//FUNCTION RUNS WHEN DATA RETURNS FROM THE WEATHER API USING THE USER INSERTED VALUES

const displayWeather = function (data) {
    try {
    const {name} = data;
    const {country} = data.sys;
    place.textContent = `The weather in ${name.toUpperCase()}, ${country}`;
    placeName.textContent = `${name.toUpperCase()},${country}`
    const {temp, humidity} = data.main;
    temperature.textContent = `Temperature: ${temp} °C`;
    humid.textContent = `Humidity: ${humidity} %`;
    const {icon, description} = data.weather[0];
    described.textContent = `${description.toUpperCase()}`;
    icons.src =     `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const {speed} = data.wind;
    windSpeed.textContent = `Wind Speed: ${speed} Km/h`;
    temperature1.textContent = `${temp} °C`;
    const imageSite = "https://source.unsplash.com/1600x900/?";
    const imageName = name.toString();
    body.setAttribute("style", "background-image: url("+ imageSite + imageName +");background-repeat: no-repeat;");
    } catch (error) {
        alert("Sorry!! There's no data for this city, Try another city");
    }
    
}

//AFTER USER TYPES IN VALUES INTO THE SEARCH BOX AND CLICKS ON THE SEARCH BUTTON OR PRESSES THE ENTER KEY ON THE KEYBOARD

button.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value.length>=2) {
        loadWeather();
    }else{
        alert("Please type in a valid city name")
    }
    
});



//ATTEMPT TO USE USER LOCATION TO GENERATE WEATHER INFORMATION

// if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(setPosition);
// }else{
//     const cityName = "Abuja";
//     const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
//     const res = await fetch(api);
//     const data = await res.json();
//     displayWeather(data);
// }
// function setPosition(position) {
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     userWeather();
// }

//     async function userWeather(latitude, longitude) {
//         const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
//         const res = await fetch(api);
//         const data = await res.json();
//         displayWeather(data);
//     }


// DEFAULT LOCATION WHEN THE PAGE LOADS

window.addEventListener("load", async function() {
    time();
    const cityName = "Abuja";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    const res = await fetch(api);
    const data = await res.json();
    displayWeather(data);
});


//ATTEMPT TO USE USER LOCATION TO GENERATE WEATHER INFORMATION

// window.addEventListener("load", async function() {
//     time();

//     if ('geolocation' in navigator) {
//         navigator.geolocation.getCurrentPosition(setPosition);
//     }else{
//         const cityName = "Abuja";
//         const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
//         const res = await fetch(api);
//         const data = await res.json();
//         displayWeather(data);
//     }
//     function setPosition(position) {
//         let latitude = position.coords.latitude;
//         let longitude = position.coords.longitude;
//         userWeather(latitude, longitude);
//     }
    
//         async function userWeather(latitude, longitude) {
//             const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
//             const res = await fetch(api);
//             const data = await res.json();
//             displayWeather(data);
//         }
// })


//FUNCTION TO GET THE CURRENT TIME AND DATE (FORMATTED) OF THE USER

const time = function () {
    const year = new Date().getYear();
    if (year === 122) {
        yr.textContent = "2022";
    }else if (year === 123) {
        yr.textContent = "2023";
    }else if (year === 124) {
        yr.textContent = "2024";
    }else if (year === 125) {
        yr.textContent = "2025";
    }else if (year === 126) {
        yr.textContent = "2026";
    }else if (year === 127) {
        yr.textContent = "2027";
    }else if (year === 128) {
        yr.textContent = "2028";
    }else if (year === 129) {
        yr.textContent = "2029";
    }else if (year === 139) {
        yr.textContent = "2030";
    }else if (year === 140) {
        yr.textContent = "2031";
    }else{
        yr.textContent = "2032"
    }
    const dateEL1 = new Date().getDate();
    dateEL.textContent = dateEL1;
    const month = new Date().getMonth();
    mnth.textContent = `${month+1}`
    const hours = new Date().getHours();
    if (hours<10) {
        hrs.textContent = `0${hours}`;
    }else{
        hrs.textContent = hours;
    }
    const minutes = new Date().getMinutes();
    if (minutes<10) {
        mins.textContent = `0${minutes}`;
    }else{
        mins.textContent = minutes;
    }
    
    const days = new Date().getDay();
    if (days === 1) {
        weekday.textContent = "Monday";
    }else if (days ===2) {
        weekday.textContent = "Tuesday";
    }else if (days ===3) {
        weekday.textContent = "Wednesday";
    }else if (days ===4) {
        weekday.textContent = "Thursday";
    }else if (days ===5) {
        weekday.textContent = "Friday";
    }else if (days ===6) {
        weekday.textContent = "Saturday";
    }else{
        weekday.textContent = "Sunday";
    }

    if (hours >= 12) {
        day.textContent = "PM"
    }else{
        day.textContent = "AM"
    }

}