import { getUniqueObjects } from "./refactoringTask";

test("Duplicate IDs removed", () => {
  const testArr = [
    { id: 1, name: "paint" },
    { id: 2, name: "bead" },
    { id: 3, name: "arm" },
    { id: 4, name: "snakes" },
    { id: 5, name: "wire" },
    { id: 6, name: "ducks" },
    { id: 1, name: "cork" },
    { id: 1, name: "bed" }
  ];

  const testResult = [
    { id: 1, name: "paint" },
    { id: 2, name: "bead" },
    { id: 3, name: "arm" },
    { id: 4, name: "snakes" },
    { id: 5, name: "wire" },
    { id: 6, name: "ducks" }
  ];

  expect(getUniqueObjects(testArr, 1)).toStrictEqual(testResult);
});
