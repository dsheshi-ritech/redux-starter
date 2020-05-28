import store from "./store";

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug added",
  },
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});
