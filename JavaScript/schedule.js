const rapidKey = config.RAPID_API_KEY;

// ====== NAVIGATION ====== COMMENT
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

//====== API FETCH FOR SCHEDULE ====== COMMENT
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
      //UFC Fight Night: Ortega v. Rodriguez
      //append div tag to body for each json
      const divCreate = document.createElement("div");
      divCreate.classList = "fight-event-boxes";
      schedContainer.append(divCreate);

      const data = document.createElement("div");
      data.innerText = json[fight].eventDescription;
      data.style.fontSize = "30px";
      data.style.borderBottom = "2px solid black";
      data.style.backgroundColor = "#f5cb5c";
      divCreate.append(data);

      //append each p tag to the div tag
      for (let fighting of Object.keys(json[fight].fights)) {
        //all 3 div tags need to be inside their own div tag
        const divForFight = document.createElement("div");
        divForFight.classList = "fight-flex";
        divCreate.append(divForFight);

        //+127 (left side)
        const dataMoney1 = document.createElement("div");
        dataMoney1.innerText = json[fight].fights[fighting].moneyLine1;
        // dataMoney1.style.width = "50px";
        divForFight.append(dataMoney1);

        //Jesica Penne vs. Emily Ducote
        const dataFight = document.createElement("div");
        dataFight.innerText = json[fight].fights[fighting].description;
        dataFight.style.width = "400px";
        divForFight.append(dataFight);

        //-154 (right side)
        const dataMoney2 = document.createElement("div");
        dataMoney2.innerText = json[fight].fights[fighting].moneyLine2;
        // dataMoney2.style.width = "50px";
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
