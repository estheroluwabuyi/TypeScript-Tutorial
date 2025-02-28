//Variable Types
let id: number = 5;
let company: string = "Acme Corp";
let isPublished: boolean = true;

//Array Types
let ids: number[] = [1, 2, 3, 4, 5];

//Any Types
let x: any = "Esther";
let xArr: any[] = ["Esther", 0, true];

//Function Types
const concatenateValues = (a: string, b: string) => {
  return a + b;
};

console.log(concatenateValues("Hello ", "World"));
console.log(concatenateValues("5", "10"));
