import calculateTotal from "./App.js";

describe("Calcular Total", () => {
  it("deberia sacar el Precio Total", () => {
    expect(calculateTotal(1, 1, "NV")).toEqual(2.065);
  });
});
