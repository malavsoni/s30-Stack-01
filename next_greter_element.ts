// Time Complexity : O(2n)
// Space Complexity : O(n)
function nextGreaterElements(nums: number[]): number[] {
  let result: number[] = Array.from({ length: nums.length });
  result.fill(-1);
  let stack: number[] = [];

  for (let i = 0; i < nums.length * 2; i++) {
    let validI = i % nums.length;
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[validI]) {
      let popped = stack.pop()!;
      result[popped] = nums[validI];
    }
    if (i < nums.length) {
      stack.push(i);
    }
  }
  return result;
}
describe("503. Next Greater Element II", () => {
  it("Happy Path - 01", () => {
    expect(nextGreaterElements([1, 2, 3, 4, 3])).toStrictEqual([
      2, 3, 4, -1, 4,
    ]);
  });
});
