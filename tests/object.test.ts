describe("Object", function () {
  it("should support in typescript", function () {
    const person: { id: string; name: string, hobbies?: string[] } = {
      id: "1",
      name: "hilman",
    };

    console.info(person);

    person.id = "2";
    person.name = "septiana";

    console.info(person);
  });
});
