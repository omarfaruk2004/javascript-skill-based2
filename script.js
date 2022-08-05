const form = document.getElementById("input-form");
const outputText = document.getElementById("output-text");

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const formDataContainer = {};

form.addEventListener("keyup", (e) => {
  const data = e.target.value;
  const element = e.target.name;
  formDataContainer[element] = data;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { firstName, lastName, age } = formDataContainer;
  const person = new Person(firstName, lastName, age);
  const displayText = `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
  outputText.innerText = displayText;
});
