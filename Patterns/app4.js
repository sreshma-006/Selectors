/* Inverted Full Pyramid */

let n = 6; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);