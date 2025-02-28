"use strict";
//
// const User = {
//   id: 2,
//   name: "Esther",
//   age: 30,
// };
const User = {
    id: 2,
    name: "Esther",
    greet(mes) {
        console.log(`${mes} ${this.name}`);
    },
    // greet(message) {
    //   console.log(`${message} ${this.name}`);
    // }, // we could simply write this in js but in ts we have to specify the type of the parameter
};
if (!User.age) {
    console.log(`No Age Of ${User.name} was found `);
}
else {
    console.log(User.age);
}
User.greet("Hello");
// const User2: UserInterface = {
//   id: 3,
//   name: "Remmy",
//   age: 19,
// };
// if (!User2.age) {
//   console.log(`No Age Of the ${User2.name} was found `);
// } else {
//   console.log(` This user's age is ${User2.age}`);
// }
