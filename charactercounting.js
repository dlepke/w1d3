function countLetters(str) {
  var smushString = str.split(" ").join('');
  var list = {};
  for (var x = 0; x < smushString.length; x++) {
    if (!list[smushString[x]]) {
      list[smushString[x]] = 0;
    }
    list[smushString[x]] += 1;
  }
  return list;
}

console.log(countLetters("lighthouse in the house"));