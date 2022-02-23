import parseEuDate from "./parseEuDate";

it("Correct date", () => {
  const result = parseEuDate("22-02-2002");
  expect(result).toBe("2002-02-21T22:00:00.000Z");
});

describe("Uncorrect value", () => {
  it("Don`t pass value", () => {
    const result = parseEuDate();
    expect(result).toBe(undefined);
  });

  it("Don`t write a year", () => {
    const result = parseEuDate("18-02-____");
    expect(result).toBe("2022-02-17T22:00:00.000Z");
  });
});
