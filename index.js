let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return cats.concat([name]);
}

function prependCat(name) {
  return [name].concat(cats);
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}

destructivelyAppendCat("Ralph");
console.log(cats); // ["Milo", "Otis", "Garfield", "Ralph"]

destructivelyPrependCat("Bob");
console.log(cats); // ["Bob", "Milo", "Otis", "Garfield"]

destructivelyRemoveLastCat();
console.log(cats); // ["Bob", "Milo", "Otis"]

destructivelyRemoveFirstCat();
console.log(cats); // ["Milo", "Otis"]

console.log(appendCat("Broom")); // ["Milo", "Otis", "Garfield", "Broom"]
console.log(cats); // ["Milo", "Otis"]

console.log(prependCat("Arnold")); // ["Arnold", "Milo", "Otis", "Garfield"]
console.log(cats); // ["Milo", "Otis"]

console.log(removeLastCat()); // ["Milo", "Otis"]
console.log(cats); // ["Milo", "Otis", "Garfield"]

console.log(removeFirstCat()); // ["Otis", "Garfield"]
console.log(cats); // ["Milo", "Otis", "Garfield"]

