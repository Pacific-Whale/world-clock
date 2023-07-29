function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("DD MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");

  //New York
  let NYElement = document.querySelector("#new-york-city");
  let NYDateElement = NYElement.querySelector(".date");
  let NYTimeElement = NYElement.querySelector(".time");
  let NYTime = moment().tz("America/New_York");

  NYDateElement.innerHTML = NYTime.format("DD MMMM YYYY");
  NYTimeElement.innerHTML = NYTime.format("HH:mm:ss");
}
setInterval(updateTime, 1000);
