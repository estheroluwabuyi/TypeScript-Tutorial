//UNION
// const printID = (id: string | number) => {
//   console.log("ID: " + id);
// };

// printID(4346666);
// printID("redds4346666");

//Another better way of doing this

type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
  console.log("ID: " + id);
};

printID(4346666);
printID("redds4346666");

//INTERSECTION
interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UserIdentity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & UserIdentity;

const signContract = (employee: Employee): void => {
  console.log(
    `Contact is signed by ${employee.name} with email: ${employee.email}`
  );
};

signContract({
  name: "Pedro",
  creditScore: 800,
  id: 43,
  email: "pedro@email.example",
});
