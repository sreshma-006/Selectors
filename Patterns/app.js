/*Half Pyramid*/
let n = 6; // you can take input from prompt or change the value
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
