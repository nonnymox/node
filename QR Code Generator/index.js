/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";

inquirer
  .prompt([
    { type: "input", message: "Enter the URL for the QR-Code:", name: "URL" },
  ])

  .then((answers) => {
    console.log(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Couldn't be rendered ");
    } else {
      // Something else went wrong
      console.log("Something went wrong");
    }
  });
// console.log(`Hi ${answer}`);
var qr = require("qr-image");
qr.image(answer, { type: "svg" });
