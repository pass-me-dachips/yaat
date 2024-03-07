function setThemeName(palleteId, displayName) {
  const titleBar = document.getElementById("theme-name-location");
  const rootElement = document.documentElement;

  titleBar.innerHTML = displayName;
  rootElement.style.setProperty(
    "--tintB",
    `var(--utils-theme-pallete-${palleteId}-tint)`
  );
  rootElement.style.setProperty(
    "--toogle-btn-color",
    `var(--utils-theme-pallete-${palleteId})`
  );
}

(() => {
  const themes = [
    { palleteId: "default", displayName: "Default" },
    { palleteId: "mercury", displayName: "Mercury" },
    { palleteId: "venus", displayName: "Venus" },
    { palleteId: "earth", displayName: "Earth" },
    { palleteId: "mars", displayName: "Mars" },
    { palleteId: "jupiter", displayName: "Jupiter" },
    { palleteId: "saturn", displayName: "Saturn" },
    { palleteId: "uranus", displayName: "Uranus" },
    { palleteId: "neptune", displayName: "Neptune" },
    { palleteId: "pluto", displayName: "Pluto" },
  ];
  const btn = (elem) =>
    `<button id="utils-theme-pallete-${elem.palleteId}" 
     onclick="setThemeName('${elem.palleteId}','${elem.displayName}' )"></button>`;

  document.getElementById("theme-name-location").innerHTML =
    themes[0].displayName;

  const Location = document.getElementById("util-theme-pallet-box");
  themes.map((elem) => (Location.innerHTML += btn(elem)));
})();

function toggleLargerFonts() {
  const root = document.documentElement;
  const checkbox = document.getElementById("display-size");
  const isChecked = checkbox.checked;
  root.style.setProperty("--yaatText-fsize", isChecked ? "20px" : "17px");
}
function toggleFontFamily() {
  const root = document.documentElement;
  const checkbox = document.getElementById("display-font");
  const isChecked = checkbox.checked;
  root.style.setProperty(
    "--yaatText-family",
    isChecked ? "'Mulish-ExtraBold', sans-serif" : "'nunito-r', sans-serif"
  );
}

const checkboxforFsize = document.getElementById("display-size");
const checkboxforFfamily = document.getElementById("display-font");
checkboxforFsize.addEventListener("change", toggleLargerFonts);
checkboxforFfamily.addEventListener("change", toggleFontFamily);
