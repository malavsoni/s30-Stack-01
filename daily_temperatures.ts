// Time Complexity : O(n)
// Space Complexity : O(1)
function dailyTemperatures(temperatures: number[]): number[] {
  let stack: number[] = [];
  let result: number[] = Array.from({ length: temperatures.length });
  result.fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let popped = stack.pop()!;
      result[popped] = i - popped;
    }
    stack.push(i);
  }

  return result;
}

describe("739. Daily Temperatures", () => {
  it("Happy Path - 01", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([
      1, 1, 4, 2, 1, 1, 0, 0,
    ]);
  });
});
