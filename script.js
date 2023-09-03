let search = document.querySelector(".search-box button");
let wetherBox = document.querySelector(".wether-box");
let tempreture = document.querySelector(".tempreture");
let description = document.querySelector(".description");
let wetherDetails = document.querySelector(".wether-details");

search.addEventListener("click", (e) => {
  let APIKey = "1b1fca55c93758b169f412e7b62556ba";
  let city = document.querySelector(".search-box input").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      let image = document.querySelector(".wether-box img");
      console.log(json);
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
      wetherBox.style.display = "flex";
      wetherDetails.style.display = "flex";
      wetherBox.classList.add("fadeIn");
      wetherDetails.classList.add("fadeIn");
      description.innerHTML = json.weather[0].description;
      tempreture.innerHTML = parseInt(json.main.temp);
    });
});
