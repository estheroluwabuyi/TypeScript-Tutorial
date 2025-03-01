"use strict";
//UNION
// const printID = (id: string | number) => {
//   console.log("ID: " + id);
// };
const printID = (id) => {
    console.log("ID: " + id);
};
printID(4346666);
printID("redds4346666");
const signContract = (employee) => {
    console.log(`Contact is signed by ${employee.name} with email: ${employee.email}`);
};
signContract({
    name: "Pedro",
    creditScore: 800,
    id: 43,
    email: "pedro@email.example",
});
