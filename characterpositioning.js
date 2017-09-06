function letterPositions(str) {

  var list = {};

  for (var x = 0; x < str.length; x++) {
    if (/\w/.test(str[x])) {
      if (!list[str[x]]) {
        list[str[x]] = [];
      }
      list[str[x]].push(x);
    }
  }
  return list;
}

console.log(letterPositions("lighthouse in the house"));