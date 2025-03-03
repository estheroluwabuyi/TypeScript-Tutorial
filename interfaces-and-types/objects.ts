//
// const User = {
//   id: 2,
//   name: "Esther",
//   age: 30,
// };

// User.age = " 31"; // This will throw an error because its assuming that we are trying to assign a string to a number. It assumed id is a number because it was assigned a number value. And it assumed name is a string because it was assigned a string value. So, it will throw an error if we try to assign a different type to the property.

//Using an interface
interface UserInterface {
  id: number;
  name: string;
  age?: number; // not required...optional property
  greet(message: string): void; // a function that takes a string and returns void...also we don't necessarily have to use the same parameter name as the one in the function
}

const User: UserInterface = {
  id: 2,
  name: "Esther",
  greet(mes: string) {
    console.log(`${mes} ${this.name}`);
  },

  // greet(message) {
  //   console.log(`${message} ${this.name}`);
  // }, // we could simply write this in js but in ts we have to specify the type of the parameter
};

if (!User.age) {
  console.log(`No Age Of ${User.name} was found `);
} else {
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

// MINI CHALLENGE WITH METHOD IN INTERFACE
interface User {
  id: number;
  name: string;
  email: string;
  getUserInfo(): void;
}

const user: User = {
  id: 1,
  name: "Esther",
  email: "esther@example.com",
  getUserInfo() {
    console.log(`User ${this.name} has an email of ${this.email}`);
  },
};

user.getUserInfo();

//MINI CHALLENGE WITH EXTERNAL FUNCTION
interface User2 {
  id: number;
  name: string;
  email: string;
}

function getUserInfo2(user2: User2): void {
  console.log(`User ${user2.name} has an email of ${user2.email}`);
}

const user2: User2 = {
  id: 2,
  name: "Remmy",
  email: "remmy@example.com",
};

getUserInfo2(user2);
