//UNIONS
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
