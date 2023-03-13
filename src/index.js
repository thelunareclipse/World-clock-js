function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
  }

  //Milan
  let milanElement = document.querySelector("#milan");
  if (milanElement) {
    let milanDateElement = milanElement.querySelector(".date");
    let milanTimeElement = milanElement.querySelector(".time");
    let milanTime = moment().tz("CET");
    milanDateElement.innerHTML = milanTime.format("MMMM Do, YYYY");
    milanTimeElement.innerHTML = milanTime.format("h:mm:ss A");
  }

  //Buenos Aires
  let baElement = document.querySelector("#buenos-aires");
  if (baElement) {
    let baDateElement = baElement.querySelector(".date");
    let baTimeElement = baElement.querySelector(".time");
    let baTime = moment().tz("America/Argentina/Buenos_Aires");
    baDateElement.innerHTML = baTime.format("MMMM Do, YYYY");
    baTimeElement.innerHTML = baTime.format("h:mm:ss A");
  }

  //Hanoi
  let hanoiElement = document.querySelector("#hanoi");
  if (hanoiElement) {
    let hanoiDateElement = hanoiElement.querySelector(".date");
    let hanoiTimeElement = hanoiElement.querySelector(".time");
    let hanoiTime = moment().tz("Asia/Ho_Chi_Minh");
    hanoiDateElement.innerHTML = hanoiTime.format("MMMM Do, YYYY");
    hanoiTimeElement.innerHTML = hanoiTime.format("h:mm:ss A");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesELement = document.querySelector("#cities");
  citiesELement.innerHTML = `<div class="city">
          <div>
            <h2 class="location">${cityName}</h2>
            <div class="time">${cityTime.format("h:mm:ss A")}</div>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
