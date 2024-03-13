function tokenize(data) {
  const token = data.trim().split("\n");
  return token[0] ? token : [];
}

function treeConstruct(token) {
  let tree = [];
  token.forEach((elem) => {
    if (elem.length > 1) {
      let units = elem.split("=");
      tree.push(...[units[0].trim(), units[1] ? units[1].trim() : ""]);
    }
  });
  return tree;
}

export default function construct(data) {
  if (data && data.includes("=")) {
    let token = tokenize(data);
    let tree = treeConstruct(token);
    return tree;
  } else {
    return [];
  }
}
//  usecase => construct(data).
// tree is returned as an array eg => [key, value, key, value].
