export default function argsParser(arr, args) {
  let argIndex;
  let argValue;
  let parsedArr = [];

  args.map((elem) => {
    if (arr.includes(elem)) {
      argIndex = arr.indexOf(elem);
      argValue = argIndex + 1;
      parsedArr.push(arr[argValue]);
    } else {
      parsedArr.push(null);
    }
  });

  return parsedArr;
}
// usage => argsParser(["-a", "valA", "-b", "valB"], ["-a", "-b"])
