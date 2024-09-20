function firstWord(str) {
  if (str.length === 0 || !str.includes(" ")) {
    return str;
  }

  const firstSpaceIndex = str.indexOf(" ");
  return str.substring(0, firstSpaceIndex);
}

console.log(firstWord("see and stop")); // Output: see
console.log(firstWord("Hello World!")); // Output: Hello
console.log(firstWord("12345")); // Output: 12345
console.log(firstWord("")); // Output:   
