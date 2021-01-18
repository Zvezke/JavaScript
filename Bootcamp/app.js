const btn = document.querySelector("#btn");
const landingPage = document.querySelector("#landingPage");
const box = document.querySelector("#box");
const lunch = document.querySelector("#lunch");
const nap = document.querySelector("#nap");
const partyTime = document.querySelector(".partyTime");

const clock = () => {
  time = document.querySelector("#clock");
  setInterval(() => {
    time.innerHTML = Date().substr(16, 8);
  }, 1000);
};

const toggleText = () => {
  btn.innerHTML === "Enough!"
    ? (btn.innerHTML = "Party time!")
    : (btn.innerHTML = "Enough!");
};

const lunchDropdownOption = () => {
  landingPage.classList.toggle("lunchTime");
  box.classList.toggle("box");
  toggleText();
};

const napDropdownOption = () => {
  landingPage.classList.toggle("napTime");
  box.classList.toggle("box");
  toggleText();
};

const startParty = () => {
  landingPage.classList.add("partyTime");
  box.classList.remove("box");
};

const endParty = () => {
  landingPage.classList.toggle("partyTime");
};

const endLunch = () => {
  landingPage.classList.remove("lunchTime");
};

const napLunch = () => {
  landingPage.classList.remove("napTime");
};

btn.addEventListener("click", () => {
  toggleText();
  // console.log("object");
  if (landingPage.classList.contains("lunchTime")) {
    console.log("endLunch");
    endLunch();
  } else if (!landingPage.classList.contains("partyTime")) {
    console.log("startParty");
    startParty();
  } else if (landingPage.classList.contains("partyTime")) {
    console.log("endParty");
    endParty();
  } else {
    console.log("clicked");
  }

  box.classList.toggle("box");
});

lunch.addEventListener("change", () => {
  const lunchTime = lunch.value;
  const actualTime = Date().substr(16, 2);
  lunchTime === actualTime ? lunchDropdownOption() : endLunch();
});

nap.addEventListener("change", () => {
  const lunchTime = lunch.value;
  const actualTime = Date().substr(16, 2);
  lunchTime === actualTime ? napDropdownOption() : napLunch();
});

clock();
