let search = document.querySelector(".search-box button");
let wetherBox = document.querySelector(".wether-box");
let tempreture = document.querySelector(".tempreture");
let description = document.querySelector(".description");
let wetherDetails = document.querySelector(".wether-details");
let wind = document.querySelector(".wind span");
let humidity = document.querySelector(".humidity span");
let notFound = document.querySelector(".not-found");

// add event to the search button
search.addEventListener("click", (e) => {
  let APIKey = "APIKey";
  let city = document.querySelector(".search-box input").value;
  //get data from API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      let image = document.querySelector(".wether-box img");

      // checking for invalid region
      if (json.cod == "404") {
        notFound.style.display = "flex";
        notFound.classList.add("fadeIn");
        wetherDetails.style.display = "none";
        wetherBox.style.display = "none";
      } else {
        notFound.classList.remove("fadeIn");
        notFound.style.display = "none";
      }
      // choice Appropriate image
      switch (json.weather[0].main) {
        case "Clear":
          image.src = "./images/clear.png";
          break;
        case "Clouds":
          image.src = "./images/cloud.png";
          break;

        case "Rain":
          image.src = "./images/rain.png";
          break;
        case "Snow":
          image.src = "./images/snow.png";
          break;
        case "Haze":
          image.src = "./images/mist.png";
          break;

        default:
          image.src = "";
      }
      // showing Details
      wetherBox.style.display = "flex";
      wetherDetails.style.display = "flex";
      wetherBox.classList.add("fadeIn");
      wetherDetails.classList.add("fadeIn");
      description.innerHTML = json.weather[0].description;
      tempreture.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
    });
});
