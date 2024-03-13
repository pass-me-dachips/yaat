function tokenize(data) {
  const tokens = data.trim().split("Yaat -EndEmbededBlock");
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

export default function embed(data) {
  if (data.includes(":::")) {
    const token = tokenize(data);
    return tree(token);
  } else {
    return {};
  }
}

/* usage => embed(data) 
each embedded block should be seperated by the command Yaat -EndEmbededBlock
*/
