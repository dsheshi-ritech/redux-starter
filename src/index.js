// import store from "./store";
import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Changed!");
});

store.dispatch(actions.bugAdded("Bug 2"));

console.log(store.getState());
// import { bugAdded } from "./actions";

// store.dispatch(bugAdded("Bug 1"));
