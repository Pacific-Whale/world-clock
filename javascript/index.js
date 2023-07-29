function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("DD MMMM YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");
  }

  //New York
  let NYElement = document.querySelector("#new-york-city");
  if (NYElement) {
    let NYDateElement = NYElement.querySelector(".date");
    let NYTimeElement = NYElement.querySelector(".time");
    let NYTime = moment().tz("America/New_York");

    NYDateElement.innerHTML = NYTime.format("DD MMMM YYYY");
    NYTimeElement.innerHTML = NYTime.format("HH:mm:ss");
  }
}
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("DD MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
