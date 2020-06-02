const logger = (param) => ({ getState, dispatch }) => (next) => (action) => {
  //console.log(param);
  next(action);
};

export default logger;
