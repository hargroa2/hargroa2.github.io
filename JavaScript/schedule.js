const rapidKey = config.RAPID_API_KEY;

// ====== NAVIGATION ======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navPosition = document.querySelector(".nav-position");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navPosition.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//====== API FETCH FOR SCHEDULE ======
const schedButton = document.getElementById("scheduleData");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidKey,
    "X-RapidAPI-Host": "sports-data3.p.rapidapi.com",
  },
};

const ufcSchedule = async () => {
  const urlSchedule = "https://sports-data3.p.rapidapi.com/ufc";
  const ufcData2 = await fetch(urlSchedule, options);
  const json = await ufcData2.json();
  loader.style.display = "none";
  console.log(json);

  //====== APPENDING DATA TO PAGE ======
  const schedContainer = document.getElementById("schedule");

  const printFightCards = () => {
    for (let fight of Object.keys(json)) {
      const divCreate = document.createElement("div");
      divCreate.classList = "fight-event-boxes";
      schedContainer.append(divCreate);

      const data = document.createElement("div");
      data.innerText = json[fight].eventDescription;
      data.style.fontSize = "30px";
      data.style.borderBottom = "2px solid black";
      data.style.backgroundColor = "#f5cb5c";
      divCreate.append(data);

      for (let fighting of Object.keys(json[fight].fights)) {
        const divForFight = document.createElement("div");
        divForFight.classList = "fight-flex";
        divCreate.append(divForFight);

        const dataMoney1 = document.createElement("div");
        dataMoney1.innerText = json[fight].fights[fighting].moneyLine1;
        divForFight.append(dataMoney1);

        const dataFight = document.createElement("div");
        dataFight.innerText = json[fight].fights[fighting].description;
        dataFight.style.width = "400px";
        divForFight.append(dataFight);

        const dataMoney2 = document.createElement("div");
        dataMoney2.innerText = json[fight].fights[fighting].moneyLine2;
        divForFight.append(dataMoney2);
      }
    }
  };

  printFightCards();
};

const loader = document.querySelector(".preload");
const icon = loader.querySelector(".loadAnimation");

schedButton.onclick = () => {
  //====== LOADING ICONS ======

  const loadAnimations = [
    "🕐",
    "🕜",
    "🕑",
    "🕝",
    "🕒",
    "🕞",
    "🕓",
    "🕟",
    "🕔",
    "🕠",
    "🕕",
    "🕡",
    "🕖",
    "🕢",
    "🕗",
    "🕣",
    "🕘",
    "🕤",
    "🕙",
    "🕥",
    "🕚",
    "🕦",
    "🕛",
    "🕧",
  ];

  const interval = 125;

  const loadEmojis = (arr) => {
    setInterval(() => {
      icon.innerText = arr[Math.floor(Math.random() * arr.length)];
    }, interval);
  };

  const init = () => {
    loadEmojis(loadAnimations);
  };
  init();
  ufcSchedule();
};
