let nameArray = ["Mike", "Ross", "Joe", "George", "John"];

for (let i = 0; i < nameArray.length; i++) {
  if (nameArray[i][0] == "J" || nameArray[i][0] == "j") {
    console.log("Goodbye " + nameArray[i]);
  } else {
    console.log("Hello " + nameArray[i]);
  }
}
