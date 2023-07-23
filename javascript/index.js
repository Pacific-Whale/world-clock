function showTime(event) {
  if (event.target.value === "paris") {
    let timezone = "Europe/Paris";
    let time = moment().tz(`${timezone}`).format("dddd, MMMM D, YYYY HH:mm");
    alert(`It is currently ${time} in Paris`);
  }
  if (event.target.value === "tokyo") {
    let timezone = "Asia/Tokyo";
    let time = moment().tz(`${timezone}`).format("dddd, MMMM D, YYYY HH:mm");
    alert(`It is currently ${time} in Tokyo`);
  }
  if (event.target.value === "sydney") {
    let timezone = "Australia/Sydney";
    let time = moment().tz(`${timezone}`).format("dddd, MMMM D, YYYY HH:mm");
    alert(`It is currently ${time} in Sydney`);
  }
}

let cityDrop = document.querySelector("#city");
cityDrop.addEventListener("change", showTime);
