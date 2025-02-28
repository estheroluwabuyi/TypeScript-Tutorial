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
const user = {
    id: 1,
    name: "Esther",
    email: "esther@example.com",
    getUserInfo() {
        console.log(`User ${this.name} has an email of ${this.email}`);
    },
};
user.getUserInfo();
function getUserInfo2(user2) {
    console.log(`User ${user2.name} has an email of ${user2.email}`);
}
const user2 = {
    id: 2,
    name: "Remmy",
    email: "remmy@example.com",
};
getUserInfo2(user2);
