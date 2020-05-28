import reducer from "./reducer";

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const dispatch = (action) => {
    // call reducer to get the new state
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) listeners[i]();
  };

  const subscribe = (listener) => listeners.push(listener);

  const getState = () => state;

  return {
    subscribe,
    dispatch,
    getState,
  };
};

export default createStore(reducer); // return a function
