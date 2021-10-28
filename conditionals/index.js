const dogAge = 2;

if (dogAge > 12) {
  console.log("cachorro véio");
} else if (dogAge < 12) {
  console.log("cachorro novo");
} else {
  console.log("cachorro");
}

const result = dogAge > 10 ? "old" : "young";
console.log(result);

const animals = {
  dog: "dog",
  cat: "cat",
  bird: "bird",
};

const myAnimal = {
  name: "lico",
  age: "8",
  type: animals.cat,
};

switch (myAnimal.type) {
  case animals.dog: {
    console.log("is a dog");
    break;
  }

  case animals.cat: {
    console.log("is a cat");
    break;
  }

  case animals.bird: {
    console.log("is a bird");
    break;
  }

  default: {
    console.log("not an animal");
    break;
  }
}
