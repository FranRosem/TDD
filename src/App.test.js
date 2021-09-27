import calculateTotal from "./App.js";

describe("Calcular Total", () => {
  it("deberia sacar el Precio Total", () => {
    expect(calculateTotal(1, 1, "NV")).toEqual(1.08);
  });
  it("deberia sacar el Precio Total", () => {
    expect(calculateTotal(2, 2, "NV")).toEqual(4.32);
  });
  it("deberia sacar el Precio Total", () => {
    expect(calculateTotal(4, 5, "AL")).toEqual(20.8);
  });
});
