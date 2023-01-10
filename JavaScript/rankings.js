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

//====== API FETCH FOR RANKINGS ======
const rankButton = document.getElementById("rankingsData");
const rankings = document.getElementById("ranks");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidKey,
    "X-RapidAPI-Host": "current-ufc-rankings.p.rapidapi.com",
  },
};

const ufcRankings = async () => {
  const url = "https://current-ufc-rankings.p.rapidapi.com/";

  const ufcData = await fetch(url, options);
  const json = await ufcData.json();
  loader.style.display = "none";

  // ====== APPENDING DATA TO PAGE ======

  const forEachClass = (index) => {
    const rank = document.getElementById("ranks");
    for (let fighter of Object.keys(json[0].fighters)) {
      const createDivs = document.createElement("div");
      rank.append(createDivs);

      const description = document.createElement("div");
      description.innerText = json[index].fighters[fighter].fighter_ranking;
      description.classList = "flex-ranks";
      createDivs.setAttribute("id", "weight-id");
      createDivs.append(description);

      const descriptionNames = document.createElement("div");
      descriptionNames.innerText = json[index].fighters[fighter].fullName;
      descriptionNames.classList = "flex-ranks";
      descriptionNames.setAttribute("id", "bold-name");
      createDivs.append(descriptionNames);

      const descriptionLinks = document.createElement("a");
      descriptionLinks.href = `http://www.ufc.com/athlete/${json[
        index
      ].fighters[fighter].fullName
        .toLowerCase()
        .replace(" ", "-")}`;
      descriptionLinks.innerText = json[index].fighters[fighter].url;
      descriptionLinks.classList = "flex-ranks";
      descriptionLinks.setAttribute("id", "url-underline");
      descriptionLinks.setAttribute("target", "_blank");
      createDivs.append(descriptionLinks);
    }
  };

  const select = document.getElementById("weightClasses");

  const weightChoice = () => {
    if (select.options[select.selectedIndex].value === "P4P") {
      forEachClass(0);
    } else if (select.options[select.selectedIndex].value === "FW") {
      forEachClass(1);
    } else if (select.options[select.selectedIndex].value === "BW") {
      forEachClass(2);
    } else if (select.options[select.selectedIndex].value === "FeW") {
      forEachClass(3);
    } else if (select.options[select.selectedIndex].value === "LW") {
      forEachClass(4);
    } else if (select.options[select.selectedIndex].value === "WW") {
      forEachClass(5);
    } else if (select.options[select.selectedIndex].value === "MW") {
      forEachClass(6);
    } else if (select.options[select.selectedIndex].value === "LHW") {
      forEachClass(7);
    } else if (select.options[select.selectedIndex].value === "HW") {
      forEachClass(8);
    } else if (select.options[select.selectedIndex].value === "WP4P") {
      forEachClass(9);
    } else if (select.options[select.selectedIndex].value === "WS") {
      forEachClass(10);
    } else if (select.options[select.selectedIndex].value === "WF") {
      forEachClass(11);
    } else if (select.options[select.selectedIndex].value === "WB") {
      forEachClass(12);
    } else if (select.options[select.selectedIndex].value === "WFe") {
      forEachClass(13);
    }
  };

  weightChoice();
};

const loader = document.querySelector(".preload");
const icon = loader.querySelector(".loadAnimation");

rankButton.onclick = () => {
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
  rankings.innerHTML = "";
  ufcRankings();
};
