import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  //or with switch case
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === actions.BUG_RESOLVED)
    return state.map(
      ({ id, resolved }) =>
        id !== action.payload.id ? bug : { ...bug, resolved: true } // update in an immutable way
    );
  return state;
}
