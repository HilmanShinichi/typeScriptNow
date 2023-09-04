import { Category, Product } from "../src/type-alias";

describe("Type Alias", function () {
  it("should support in typescript", function () {
    const category: Category = {
      id: 1,
      name: "Mouse",
    };

    const product: Product = {
      id: 1,
      name: "Keyboard",
      price: 300000,
      category: category,
      description: "mechanical rexus",
    };

    console.info(product);
    console.info(category);
  });
});
 