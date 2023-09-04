describe("Any", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "hilman",
      age: 20,
    };

    person.age = 31;
    person.address = "Indonesia";
  });
});
