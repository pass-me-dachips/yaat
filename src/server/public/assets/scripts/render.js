
const url = window.location.href.split("/")[0];

(async () => {
  try {
    const response = await fetch(url + "/apis", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const tree = await response.json();
    document.title = tree.files ? tree?.files[0] : 'Yaat'
    RestBody(tree);
  } catch (error) {
    console.log(error.message);
  }
})();

async function updateRoot(base) {
  document.title = base
  try {
    const response = await fetch(url + `/apis/tree/${base}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const tree = await response.json();
    renderYaat(tree.body, "tree-cont-body", tree.embededCode);
  } catch (error) {
    console.log(error.message);
  }
}

function removeTabsActiveClases(base, ids) {
  ids.split(",").forEach((elem) => {
    const element = document.getElementById(elem);
    element.classList.remove("tree-tab-box-t-active");
  });
  const selected = document.getElementById(base);
  selected.classList.add("tree-tab-box-t-active");
}

const toogleNavigationbar = () => {
  const branchHeader = document.getElementById("branch-header-logo");
  const navigationMenu = document.getElementById("tree-tab");
  const treeBody = document.getElementById("tree-body");
  branchHeader.classList.toggle("hideBranchLOGO");
  treeBody.classList.toggle("tree-expand-body");
  navigationMenu.classList.toggle("hide-tree-tab");
};

function RestBody(tree) {
  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.log(err);
    }
  }

  const setMode = (type) => {
    const rootElem = document.getElementById("header-mode");
    if (type === "tree") {
      rootElem.classList.add("h-t-b-tree");
    }
    const rootSvg =
      type === "branch"
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="dodgerblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;
    rootElem.innerHTML = rootSvg;
  };

  if (tree.type === "branch") {
    const branchBody = document.getElementById("branch-body");
    branchBody.style.display = "block";
    setMode(tree.type);
    renderYaat(tree.body, "branch-body", tree.embededCode);
  } else {
    // tree
    const treeBody = document.getElementById("tree-body");
    const headerMode = document.getElementById("header-mode");
    const branchHeaderLogo = document.getElementById("branch-header-logo");
    treeBody.style.display = "block";
    setMode(tree.type);
    branchHeaderLogo.classList.add("hideBranchLOGO");
    headerMode.addEventListener("click", toogleNavigationbar);
    fetchDocs(tree);
    renderYaat(tree.body, "tree-cont-body", tree.embededCode);
  }

  function fetchDocs(tree) {
    const navTab = document.getElementById("tree-tab-box");
    const Lists = (data, index) => {
      const isActive = tree.activeFile === index;
      const className = isActive
        ? "tree-tab-box-t tree-tab-box-t-active"
        : "tree-tab-box-t";

      return `<button class="${className}" id="${data}" onclick="updateRoot('${data}'), removeTabsActiveClases('${data}', '${
        tree.files
      }')">${data}</button>`;
    };

    tree.files.map((elem, index) => {
      navTab.innerHTML += Lists(elem, index);
    });

    const navigationMenu = document.getElementById("tree-tab");
    navigationMenu.style.display = "block";
  }
  // fetch docs
}

function renderYaat(treeBody, location, embededCode) {
  // do work
  const body = document.getElementById(location);
  body.innerHTML = "";

  const createTitleNode = (content) => {
    const title = document.createElement("h1");
    title.textContent = content;
    title.id = "title302";
    return title;
  };
  // create title

  const createSectionNode = (sectionIndex) => {
    const section = document.createElement("section");
    section.id = sectionIndex;
    section.classList.add("section395");
    return section;
  };
  // create section

  const createHeaderNode = (content) => {
    const header = document.createElement("h2");
    header.textContent = content;
    header.classList.add("header202");
    return header;
  };
  // create header

  const createSubHeaderNode = (content) => {
    const sub_header = document.createElement("h3");
    sub_header.textContent = content;
    sub_header.classList.add("header202");
    sub_header.classList.add("subheader9s9");
    return sub_header;
  };
  // create subheader

  const createTextNode = (content) => {
    const text = document.createElement("p");
    content = content.replaceAll("[[ ", `<span class="inline-texts bold302">`);
    content = content.replaceAll("{{ ", `<span class="inline-texts ed292">`);
    content = content.replaceAll("(( ", `<span class="inline-texts wi2992">`);
    content = content.replaceAll(
      "<< ",
      `<span class="inline-texts inlinecode">`
    );
    content = content.replaceAll(" ]]", `</span>`);
    content = content.replaceAll(" }}", `</span>`);
    content = content.replaceAll(" ))", `</span>`);
    content = content.replaceAll(" >>", `</span>`);
    text.innerHTML = content;
    text.classList.add("text202");
    return text;
  };
  // create text

  const createListNode = (content) => {
    const list = document.createElement("li");
    list.textContent = content;
    list.classList.add("text202");
    list.classList.add("lista03");
    return list;
  };
  // create list

  const createInfoNode = (content) => {
    const info = document.createElement("div");
    info.textContent = content;
    info.classList.add("text202");
    info.classList.add("info020");
    return info;
  };
  // create info

  const createComputerCodeNode = (code, title) => {
    const ccBody = document.createElement("div");
    ccBody.classList.add("computerCode302");

    const ccTitle = document.createElement("div");
    ccTitle.textContent = title;
    ccTitle.classList.add("computerCode-header");

    const ccCopyBtn = document.createElement("button");
    ccCopyBtn.textContent = "copy";
    ccCopyBtn.classList.add("computerCode-header-cpbtn");
    ccCopyBtn.addEventListener("click", (e) => {
      navigator.clipboard.writeText(code);
      ccCopyBtn.textContent = "copied";
    });

    ccTitle.appendChild(ccCopyBtn);
    // ccTtle.

    const ccPre = document.createElement("pre");
    ccPre.textContent = code;
    ccPre.classList.add("computerCode-computerCode");

    ccBody.appendChild(ccTitle);
    ccBody.appendChild(ccPre);

    return ccBody;
  };
  // create computercode

  treeBody.children.forEach((elem) => {
    const { type, content, index, childOf } = elem;
    if (type === "title::") {
      const title = createTitleNode(content);
      body.appendChild(title);
    } else if (type === "sec::") {
      const section = createSectionNode(index);
      body.appendChild(section);
    } else if (type === "hl::") {
      const header = createHeaderNode(content);
      document.getElementById(`${childOf}`).appendChild(header);
    } else if (type === "hx::") {
      const sub_header = createSubHeaderNode(content);
      document.getElementById(`${childOf}`).appendChild(sub_header);
    } else if (type === "text::") {
      let textContent = `${content}`;
      const text = createTextNode(textContent);
      document.getElementById(`${childOf}`).appendChild(text);
    } else if (type === "info::") {
      const info = createInfoNode(content);
      document.getElementById(`${childOf}`).appendChild(info);
    } else if (type === "list::") {
      const list = createListNode(content);
      document.getElementById(`${childOf}`).appendChild(list);
    } else if (type === "computerCode::") {
      const code = content[0],
        title = content[1];
      if (
        content &&
        content.length === 2 &&
        code &&
        title &&
        embededCode.isConent === true
      ) {
        const computerCode = createComputerCodeNode(
          embededCode.body[code],
          title
        );
        document.getElementById(`${childOf}`).appendChild(computerCode);
      }
    }
  });
}
// renderYaat
