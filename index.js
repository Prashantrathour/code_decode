// Here is a simple coding scheme designed for wireless communication between a smart lock and
// an Android/iOS application: Each letter in the alphabet is assigned a number from 1 to 26,
// alphabetically. Given any upper-case word, it is encoded it as follows:
// - Odd numbered letters are replaced by their alphabetic opposite.
// - Even numbered letters are replaced by two characters - itself, and its opposite.
// Example:
// Input data Encoded Output
// [ABC, ZBYX
// XYZ, XCBZA
// GHI, THSR
// NOP, NMLPK
// JKL, JQPLO
// UTS,] FTGH

// Your exercise is to code two functions:
// - Encode: this will take an upper case string, and return the encoded string according to the
// scheme described above.
// - Decode: this will take a string encoded as above, and return the decoded string.

// Function to encode an upper case string
const findposition = (char) => {
  return char.charCodeAt(0) - "A".charCodeAt(0) + 1;
};
function findOpposite(letter) {
  if (/^[A-Z]$/.test(letter)) {
    const oppositePosition =
      25 - (letter.charCodeAt(0) - "A".charCodeAt(0)) + 1;
    const oppositeLetter = String.fromCharCode(
      "A".charCodeAt(0) + oppositePosition - 1
    );

    return oppositeLetter;
  }

 
}

function encode(input) {
  let encodedOutput = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const charCode = char.charCodeAt(0) - "A".charCodeAt(0) + 1;

    if (findposition(char) % 2 !== 0) {
      encodedOutput += findOpposite(char);
    } else {
      encodedOutput += char + findOpposite(char);
    }
  }

  return encodedOutput;
}

function decode(str) {
  str = str.toLowerCase();

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let number = str.charCodeAt(i) - "a".charCodeAt(0) + 1;
    let opposite = 26 - number + 1;
    if (
      number % 2 == 0 &&
      str[i + 1] == String.fromCharCode("a".charCodeAt(0) + opposite - 1)
    ) {
      arr.push(str[i]);
      i++;
    } else {
      arr.push(String.fromCharCode("a".charCodeAt(0) + opposite - 1));
    }
  }
  let ans = arr.join("");
  return ans.toUpperCase();
}
let arr = ["ABC", "XYZ", "GHI", "NOP", "JKL", "UTS"];
const input = arr[5];
const encodedOutput = encode(input);
console.log(`Input data: ${input}\nEncoded Output: ${encodedOutput}`);

const decodedOutput = decode(encodedOutput);
console.log(`Decoded Output: ${decodedOutput}`);
