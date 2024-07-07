interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?:  boolean;

}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 37,
    firstName: "Fernando",
    lastName: "Herrera",
    isAlive: undefined,
    address: {
      country: "canada",
      houseNo: 615,
    },
  };
  return (
    <>
      <h1>Object Literals</h1>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
