// const tree = {
//   type: "branch",
//   body: {
//     type: "yaat",
//     children: [
//       {
//         index: 0,
//         type: "title::",
//         content: "Creating Portable Applications with docker",
//       },
//       { index: 1, type: "sec::", content: "" },
//       {
//         index: 2,
//         type: "hl::",
//         content: "Application Heading",
//         childOf: 1,
//       },
//       {
//         index: 3,
//         type: "text::",
//         content:
//           "Lorem ipsum dolor sit amet, [[ consectetur ]] adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse {{ cillum and cosmo }} dolore eu fugiat nulla pariatur. Excepteur sint (( occaecat )) cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         childOf: 1,
//       },
//       {
//         index: 4,
//         type: "info::",
//         content:
//           "Bacon ipsum dolor amet short loin boudin pork chop 😊😊, strip steak porchetta turkey cow rump picanha. Kevin brisket andouille boudin meatball. Jowl pork belly cupim alcatra tail beef ribs pork chop ham hock leberkas prosciutto biltong kielbasa.",
//         childOf: 1,
//       },
//       { index: 5, type: "sec::", content: "" },
//       {
//         index: 6,
//         type: "hx::",
//         content: "Application Subheading",
//         childOf: 5,
//       },
//       {
//         index: 7,
//         type: "text::",
//         content:
//           "Bacon ipsum dolor amet short ribs pancetta venison, pork belly turducken beef ribs boudin tri-tip swine picanha sausage ham hock. Sirloin jerky leberkas boudin ribeye, pork chop swine cow jowl cupim bacon. Filet mignon drumstick beef ribs t-bone prosciutto bacon cow biltong fatback. Pancetta pork chop pork belly jerky, tenderloin shankle t-bone sirloin. Leberkas biltong tri-tip ground round porchetta picanha. Cupim boudin prosciutto kielbasa tail sirloin salami. Turkey alcatra salami, boudin pig hamburger andouille pork loin brisket t-bone.",
//         childOf: 5,
//       },
//       { index: 8, type: "list::", content: "foo 🍜", childOf: 5 },
//       { index: 9, type: "list::", content: "bar 🍹", childOf: 5 },
//       { index: 10, type: "sec::", content: "" },
//       { index: 11, type: "hx::", content: "Computer code", childOf: 10 },
//       {
//         index: 12,
//         type: "text::",
//         content:
//           "This feature enables the incorporation of computer code snippets on your Yaatpage with just two essential elements: the << reference_to_code element >>, indicating the reference name to the specified code in the .yaatEmbed file, and the << display_title >> element.",
//         childOf: 10,
//       },
//       {
//         index: 13,
//         type: "computerCode::",
//         content: ["sampleA", "SAMPLE.JS"],
//         childOf: 10,
//       },
//       {
//         index: 14,
//         type: "text::",
//         content: "a node js application.",
//         childOf: 10,
//       },
//       {
//         index: 15,
//         type: "computerCode::",
//         content: ["sampleB", "SAMPLE.PY"],
//         childOf: 10,
//       },
//       {
//         index: 16,
//         type: "text::",
//         content: "a python application.",
//         childOf: 10,
//       },
//     ],
//   },
//   embededCode: {
//     sampleA:
//       "const http = require('http');\n" +
//       "\n" +
//       "const server = http.createServer((req, res) => {\n" +
//       "    res.writeHead(200, {'Content-Type': 'text/plain'});\n" +
//       "    res.end('Hello, HTTP Server!');\n" +
//       "});\n" +
//       "\n" +
//       "const PORT = 8080;\n" +
//       "server.listen(PORT, () => {\n" +
//       "    console.log('Server running at http://localhost:8080/');\n" +
//       "});",
//     sampleB:
//       "from http.server import SimpleHTTPRequestHandler\n" +
//       "from socketserver import TCPServer\n" +
//       "\n" +
//       "PORT = 8080\n" +
//       "\n" +
//       "handler = SimpleHTTPRequestHandler\n" +
//       'with TCPServer(("", PORT), handler) as httpd:\n' +
//       '    print("Serving at port", PORT)\n' +
//       "    httpd.serve_forever()",
//   },
// };

//
//
//
//
//
//
//
//
const tree = {
  type: "tree",
  activeFile: 0,
  files: ["introduction", "installation", "useCases"],
  body: {
    type: "yaat",
    children: [
      {
        index: 0,
        type: "title::",
        content: "Creating Portable Applications with docker",
      },
      { index: 1, type: "sec::", content: "" },
      {
        index: 2,
        type: "hl::",
        content: "Application Heading",
        childOf: 1,
      },
      {
        index: 3,
        type: "text::",
        content:
          "Lorem ipsum dolor sit amet, [[ consectetur ]] adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse {{ cillum and cosmo }} dolore eu fugiat nulla pariatur. Excepteur sint (( occaecat )) cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        childOf: 1,
      },
      {
        index: 4,
        type: "info::",
        content:
          "Bacon ipsum dolor amet short loin boudin pork chop 😊😊, strip steak porchetta turkey cow rump picanha. Kevin brisket andouille boudin meatball. Jowl pork belly cupim alcatra tail beef ribs pork chop ham hock leberkas prosciutto biltong kielbasa.",
        childOf: 1,
      },
      { index: 5, type: "sec::", content: "" },
      {
        index: 6,
        type: "hx::",
        content: "Application Subheading",
        childOf: 5,
      },
      {
        index: 7,
        type: "text::",
        content:
          "Bacon ipsum dolor amet short ribs pancetta venison, pork belly turducken beef ribs boudin tri-tip swine picanha sausage ham hock. Sirloin jerky leberkas boudin ribeye, pork chop swine cow jowl cupim bacon. Filet mignon drumstick beef ribs t-bone prosciutto bacon cow biltong fatback. Pancetta pork chop pork belly jerky, tenderloin shankle t-bone sirloin. Leberkas biltong tri-tip ground round porchetta picanha. Cupim boudin prosciutto kielbasa tail sirloin salami. Turkey alcatra salami, boudin pig hamburger andouille pork loin brisket t-bone.",
        childOf: 5,
      },
      { index: 8, type: "list::", content: "foo 🍜", childOf: 5 },
      { index: 9, type: "list::", content: "bar 🍹", childOf: 5 },
      { index: 10, type: "sec::", content: "" },
      { index: 11, type: "hx::", content: "Computer code", childOf: 10 },
      {
        index: 12,
        type: "text::",
        content:
          "This feature enables the incorporation of computer code snippets on your Yaatpage with just two essential elements: the << reference_to_code element >>, indicating the reference name to the specified code in the .yaatEmbed file, and the << display_title >> element.",
        childOf: 10,
      },
      {
        index: 13,
        type: "computerCode::",
        content: ["sampleA", "SAMPLE.JS"],
        childOf: 10,
      },
      {
        index: 14,
        type: "text::",
        content: "a node js application.",
        childOf: 10,
      },
      {
        index: 15,
        type: "computerCode::",
        content: ["sampleB", "SAMPLE.PY"],
        childOf: 10,
      },
      {
        index: 16,
        type: "text::",
        content: "a python application.",
        childOf: 10,
      },
    ],
  },
  embededCode: {
    sampleA:
      "const http = require('http');\n" +
      "\n" +
      "const server = http.createServer((req, res) => {\n" +
      "    res.writeHead(200, {'Content-Type': 'text/plain'});\n" +
      "    res.end('Hello, HTTP Server!');\n" +
      "});\n" +
      "\n" +
      "const PORT = 8080;\n" +
      "server.listen(PORT, () => {\n" +
      "    console.log('Server running at http://localhost:8080/');\n" +
      "});",
    sampleB:
      "from http.server import SimpleHTTPRequestHandler\n" +
      "from socketserver import TCPServer\n" +
      "\n" +
      "PORT = 8080\n" +
      "\n" +
      "handler = SimpleHTTPRequestHandler\n" +
      'with TCPServer(("", PORT), handler) as httpd:\n' +
      '    print("Serving at port", PORT)\n' +
      "    httpd.serve_forever()",
  },
};
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

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

const toogleNavigationbar = () => {
  const navigationMenu = document.getElementById("tree-tab");
  const treeBody = document.getElementById("tree-body");
  treeBody.classList.toggle("tree-expand-body");
  navigationMenu.classList.toggle("hide-tree-tab");
};

if (tree.type === "branch") {
  const branchBody = document.getElementById("branch-body");
  branchBody.style.display = "block";
  setMode(tree.type);
  renderYaat(tree.body, "branch-body", tree.embededCode);
} else {
  // tree
  const treeBody = document.getElementById("tree-body");
  treeBody.style.display = "block";
  setMode(tree.type);
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
    return `<button class="${className}" onclick="renderYaat(tree.body, 'tree-cont-body', tree.embededCode)">${data}</button>`;
  };

  tree.files.map((elem, index) => {
    navTab.innerHTML += Lists(elem, index);
  });

  const navigationMenu = document.getElementById("tree-tab");
  navigationMenu.style.display = "block";
}
// fetch docs

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
      copyToClipboard(code);
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
      if (content && content.length === 2 && code && title) {
        const computerCode = createComputerCodeNode(embededCode[code], title);
        document.getElementById(`${childOf}`).appendChild(computerCode);
      }
    }
  });
}
// render Yaat
