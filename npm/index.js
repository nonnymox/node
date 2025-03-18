// var generateName = require("sillyname")
import generateName from "sillyname";
var sillyName = generateName();
console.log(`My name is ${sillyName}`);

// Use:

import { randomSuperhero } from "superheroes";
const name = randomSuperhero();
console.log(`But you can call me ${name}`);

// Instead of:

// import superheroes from "superheroes";
// const name = superheroes.random()