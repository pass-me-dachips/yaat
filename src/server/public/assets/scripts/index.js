// 

const showTab = (id) => {
  const rootElem = document.getElementById(id);
  rootElem.classList.remove("util-remove-util");
  rootElem.classList.remove("hide-util");
  rootElem.classList.add("show-util");
};

const hideTab = (id) => {
  const rootElem = document.getElementById(id);
  rootElem.classList.remove("show-util");
  rootElem.classList.add("hide-util");
};

const navigateTowebpage = (url) => {
  window.location.assign(url);
};

const themeIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z"/></svg>`;
const displayIcon = `<svg id="display" xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M440-80v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm137-240h83l44-123h193l43 123h83L523-880h-86L257-400Zm151-192 70-199h4l70 199H408Z"/></svg>`;
const uptimeIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m438-298 226-226-57-57-169 169-85-85-57 57 142 142Zm42 218q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z"/></svg>`;
const docsIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
const yaatIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="M280-160v-441q0-33 24-56t57-23h439q33 0 56.5 23.5T880-600v320L680-80H360q-33 0-56.5-23.5T280-160ZM81-710q-6-33 13-59.5t52-32.5l434-77q33-6 59.5 13t32.5 52l10 54h-82l-7-40-433 77 40 226v279q-16-9-27.5-24T158-276L81-710Zm279 110v440h280v-160h160v-280H360Zm220 220Z"/></svg>`;

const footer = document.getElementById("footer-cont");

const toogleFooter = () => {
  footer.classList.toggle("hide-f");
};

const footerIcons = `
  <div class="f-t-c" onclick="showTab('theme-util')">
   ${themeIcon}
   <div class="f-t-c-t">Themes</div>
  </div>

  <div class="f-t-c" onclick="showTab('display-util')">
   ${displayIcon}
   <div class="f-t-c-t" id="display-title">Display</div>
  </div>

  <div class="f-t-c" onclick="showTab('uptime-util')">
   ${uptimeIcon}
   <div class="f-t-c-t">Uptime</div>
  </div>

  <div class="f-t-c" onclick="window.location.href='https://yaat.onrender.com'">
   ${docsIcon}
   <div class="f-t-c-t">Docs</div>
  </div>

  <div class="f-t-c" onclick="showTab('yaainfo-util')">
   ${yaatIcon}
   <div class="f-t-c-t">Yaat</div>
  </div>
`;

footer.innerHTML = footerIcons;
