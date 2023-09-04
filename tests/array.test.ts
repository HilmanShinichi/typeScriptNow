describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["hilman", "septiana", "joko"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: readonly string[] = ["football", "basketball", "volleyball"];
    console.log(hobbies);
    console.log(hobbies[0]);
    console.log(hobbies[1]);

    // hobbies[0] = 'tennis';
  });

  it("should support tupple", function () {
    const person: readonly [string, number, boolean] = ["hilman", 1, true];

    console.info(person);
    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);

    // person[0] = 'tennis';
  });
});
