import data from "./data";
import updateSquare from "./utils/updateSquare";
import updateBoard from "./utils/updateBoard";

function reducer(state = data, action) {
  switch (action.type) {
    case "UPDATE_SQUARE":
      return {
        ...state,
        boardInfo: updateSquare(
          state.boardInfo,
          action.payload.index,
          action.payload.rowIndex
        ),
      };
    case "UPDATE_BOARD":
      return { ...state, boardInfo: updateBoard(state.boardInfo) };
    case "RESET":
      return data;
    case "SET_RUNNING":
      return { ...state, isRunning: action.payload };
    case "SET_TEMPO":
      return { ...state, tempo: action.payload };
    default:
      return state;
  }
}

export default reducer;
