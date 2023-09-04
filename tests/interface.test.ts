import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in typescript", function () {
    const seller: Seller = {
      id: "1",
      name: "Toko hilman",
      nib: "123",
      npwp: "456",
    };

    seller.name = "toko oren";
  });

  it("should support interface", function () {
    interface addFunction {
      (a: number, b: number): number;
    }

    const add: addFunction = (a: number, b: number): number => {
      return a + b;
    };

    console.info(add(1, 2));

    expect(add(1, 2)).toBe(3);
  });

  it("should support indexable", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["hilman", "septiana"];
    console.info(names);
  });

  it("should support indexable interface for non nnumber index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "hilman",
      hobby: "basketball",
    };

    expect(dictionary["name"]).toBe("hilman");
    expect(dictionary["hobby"]).toBe("basketball");
  });

  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "hilman",
      division: "marketing",
    };

    console.info(employee);

    const manager: Manager = {
      id: "1",
      name: "septiana",
      division: "marketing",
      numberOfEmpoloyees: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", function () {
    const person: Person = {
      name: "septiana",
      sayHello(name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("hilman"));
  });

  it("should suport intersection type", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "hilman",
    };

    console.info(domain);
  });

  it("should support type assertions", function () {
    const person: any = {
      name: "hilman",
      age: 20,
    };

    const person2: Person = person as Person;
    // person2.sayHello('budi')

    console.info(person2);
  });
});
