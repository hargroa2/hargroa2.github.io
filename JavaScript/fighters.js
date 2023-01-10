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

//===== API WIKI FETCH ======
const fightButton = document.getElementById("fighterButton");
const searchResults = document.querySelector(".results");

fightButton.addEventListener("click", async () => {
  const searchInput = document.getElementById("searchMe").value;

  wikiURL = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&utf8=1&srsearch=${searchInput}`;

  const ufcWiki = await fetch(wikiURL);
  const json = await ufcWiki.json();
  console.log(json);

  const errorMessage = (message) => {
    alert(message);
  };

  const howManyWordsInSearch = () => {
    let text = searchInput;
    text = text.split(" ");
    return text.length;
  };

  if (searchInput == 0) {
    return errorMessage("Invalid search, please enter a search term");
  } else if (howManyWordsInSearch() != 2) {
    errorMessage("Please enter a valid fighter");
  } else {
    displayResults(json);
  }
});

const displayResults = (results) => {
  let output = "";
  results.query.search.forEach((result) => {
    let resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
    let urlUFC = `https://www.ufc.com/athlete/${result.title
      .replaceAll(" ", "-")
      .toLowerCase()}`;

    output += `
      <div class="result">
        <div class="result-grid">
          <a href="${urlUFC}" target="_blank" rel="noopener">${result.title}</a>
          <a href="${resultURL}" target="_blank" rel="noopener">${resultURL}</a>
          <div>${"..." + result.snippet + "..."}</div>
        </div>
      </div>
      `;

    searchResults.innerHTML = output;
  });
};
