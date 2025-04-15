import * as Calculator from "@/app/models/calculator";

test("sum 2 + 2 should return 4", () => {
  const soma = Calculator.sum(2, 2);
  expect(soma).toBe(4);
});

test("sum 5 + 100 should return 105", () => {
  const soma = Calculator.sum(5, 100);
  expect(soma).toBe(105);
});
