function tokenize(data) {
  const tokens = data.trim().split("\n\n\n\n\n");
  return tokens;
}

function tree(token) {
  let tree = {};
  token.forEach((elem) => {
    let units = elem.split(":::");
    if (units[0] !== "") {
      tree[units[0].trim()] = units[1]?.trim();
    }
  });
  return tree;
}

export default function embbed(data) {
  if (data.includes(":::")) {
    const token = tokenize(data);
    return tree(token);
  } else {
    return {};
  }
}

/* usage => embbed(data) 
each embedded block should be seperated by 5 or more line breaks or else, the interpreter
skips the next embeddedblock appending its index to the end of the previous embeddedblock.
*/
