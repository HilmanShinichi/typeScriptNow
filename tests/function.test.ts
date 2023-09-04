describe("Function", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("hilman")).toBe("Hello hilman");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("hilman");
  });

  it("should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("hilman")).toBe("Hello hilman");
  });

  it("should support rest parameter", function () {
    function sum(...numbers: number[]): number {
      let total = 0;
      for (const number of numbers) {
        total += number;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4)).toBe(10);
  });

  it("should support optional parameter", function () {
    function sayHello(firstname: string, lastname?: string) {
      if (lastname) {
        return `Hello ${firstname} ${lastname}`;
      } else {
        return `Hello ${firstname}`;
      }
    }

    expect(sayHello("hilman")).toBe("Hello hilman");
    expect(sayHello("hilman", "septiana")).toBe("Hello hilman septiana");
  });

  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "number") {
        return value + 2;
      } else {
        return value.toUpperCase();
      }
    }

    expect(callMe(1)).toBe(3);
    expect(callMe("hilman")).toBe("HILMAN");
  });
});
