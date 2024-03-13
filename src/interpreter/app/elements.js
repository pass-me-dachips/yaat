const elements = {
  all: [
    "title::",
    "text::",
    "sec::",
    "list::",
    "computerCode::",
    "hl::",
    "hx::",
    "info::",
    "[[", // bold message
    "{{", // error or deprecated message
    "((", // warn or info message
    "<<", // inline code message
  ],
};
elements["block"] = elements.all.slice(0, 8);
elements["inline"] = elements.all.slice(8);

export default elements;
