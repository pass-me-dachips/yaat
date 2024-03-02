// only block elements are processed in this section.

import elements from "./elements.js";

function tokenize(syntax) {
  const tokens = syntax.trim().split(/\s+/);
  return tokens;
}
// tokenize the input

function syntaxChecking(token, fileName) {
  if (token[0] !== elements.all[0]) {
    throw {
      message: `Error at '${fileName}':char[0]. expected title::, got ${token[0]}`,
    };
  } else {
    return token;
  }
}
// check syntax

function hasReachedAnotherElement(token, index) {
  token = token.slice(index + 1);
  /* added index + 1 here because if the loop starts, it concludes the first element
  matches the scope, and end the request. so starting from the second prevents this.
  */
  const tokenLength = token.length;
  let returnToken = {
    content: [],
  };

  for (let i = 0; i < tokenLength; i++) {
    const track = { element: token[i], index: i };
    if (!elements.block.includes(track.element)) {
      returnToken.content.push(track.element);
      returnToken["index"] = track.index + 1;
    } else {
      break;
    }
  }

  return returnToken;
}
// checks the token for elements

function AST(token) {
  const tree = { type: "yaat", children: [] };
  let tokenElements = [];
  let currentCheck;

  token.forEach((elem, index) => {
    if (elements.block.includes(elem)) {
      tokenElements.push({ elem, index });
    }
  });

  for (let i = 0; i < tokenElements.length; i++) {
    tree.children.push({});

    currentCheck = hasReachedAnotherElement(token, tokenElements[i].index);

    tree.children[i]["index"] = i;
    tree.children[i]["type"] = tokenElements[i].elem;
    tree.children[i]["content"] = currentCheck.content.join(" ");

    if (tree.children[i]["type"] === "computerCode::") {
      tree.children[i]["content"] = tree.children[i]["content"].split(",");
    }
  }

  const sections = tree.children
    .filter((elem) => elem.type === "sec::")
    .reverse();

  tree.children.forEach((elem) => {
    if (elem.type !== "sec::") {
      for (let x = 0; x < sections.length; x++) {
        if (elem.index > sections[x].index) {
          elem["childOf"] = sections[x].index;
          break;
        }
      }
    }
    return elem;
  });

  return tree;
}

export default function yaatTree(yaat, fileName) {
  if (yaat && fileName) {
    const tokens = tokenize(yaat);
    const syntaxCheck = syntaxChecking(tokens, fileName);
    const astTree = AST(syntaxCheck);
    return astTree;
  } else {
    throw { message: `Cannot read null on ${fileName}` };
  }
}
// usecase => yaatTree(data, fileName)
