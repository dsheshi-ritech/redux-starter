import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch({
  type: "apiCallBegan",
  payload: {
    url: "/bugs",
    method: "get",
    data: {},
    onSuccess: "bugsReceived",
    onError: "apiRequestFailed",
  },
});

//Selectors (query right from redux store)
