function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");

  //Milan
  let milanElement = document.querySelector("#milan");
  let milanDateElement = milanElement.querySelector(".date");
  let milanTimeElement = milanElement.querySelector(".time");
  let milanTime = moment().tz("CET");
  milanDateElement.innerHTML = milanTime.format("MMMM Do, YYYY");
  milanTimeElement.innerHTML = milanTime.format("h:mm:ss A");

  //Buenos Aires
  let baElement = document.querySelector("#buenos-aires");
  let baDateElement = baElement.querySelector(".date");
  let baTimeElement = baElement.querySelector(".time");
  let baTime = moment().tz("America/Argentina/Buenos_Aires");
  baDateElement.innerHTML = baTime.format("MMMM Do, YYYY");
  baTimeElement.innerHTML = baTime.format("h:mm:ss A");

  //Hanoi
  let hanoiElement = document.querySelector("#hanoi");
  let hanoiDateElement = hanoiElement.querySelector(".date");
  let hanoiTimeElement = hanoiElement.querySelector(".time");
  let hanoiTime = moment().tz("Asia/Ho_Chi_Minh");
  hanoiDateElement.innerHTML = hanoiTime.format("MMMM Do, YYYY");
  hanoiTimeElement.innerHTML = hanoiTime.format("h:mm:ss A");
}
updateTime();
setInterval(updateTime, 1000);
