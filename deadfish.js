// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]


// Return the output array, and ignore all non-op characters
function parse(data) {
  let cmds = ["i", "d", "s", "o"];
  let array = [];
  let value = 0;
  let args = data.split("");
  let filtered_cmds = args.filter((arg) => cmds.includes(arg));

  for (let cmd of filtered_cmds) {
    switch (cmd) {
      case "i":
        value++;
        break;

      case "d":
        value--;
        break;

      case "s":
        value **= 2;
        break;

      case "o":
        array.push(value);
        break;
    }
  }
  return array;
}