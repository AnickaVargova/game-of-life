import { neighbours1, neighbours2 } from "./functionsToTest";
import {updateSquare} from "./functionsToTest";

const boardInfo = [
  [true, true, false],
  [true, false, true],
  [false, true, false],
  [true, true, true],
];

const expectedNeighbours = [2, 3, 2, 3, 5, 2, 4, 5, 4, 2, 3, 2];

const expectedChangedBoard = [
  [false, true, false],
  [true, false, true],
  [false, true, false],
  [true, true, true],
];


describe("test", () => {
  test("test1", () => {
    expect(neighbours2(boardInfo)).toEqual(expectedNeighbours);
  });
  test("test2", () => {
    expect(updateSquare(boardInfo,0,0,)).toEqual(expectedChangedBoard);
  });
});
