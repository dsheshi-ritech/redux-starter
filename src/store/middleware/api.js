import axios from "axios";

const api = ({ dispatch }) => (next) => async (action) => {
  console.log("Action 1", action);
  console.log("Action Type 1", action.type);

  if (action.type !== "apiCallBegan") return next(action);

  next(action);
  console.log("Action 2", action);
  console.log("Action Type 2", action.type);
  const { url, method, data, onSuccess, onError } = action;

  try {
    const response = await axios.request({
      baseURL: `http://localhost:9001/api${url}`,
      method,
      data,
    });

    console.log("Reponse: ", response);
    // dispatch({ type: onSuccess, payload: response.payload });
  } catch (error) {
    dispatch({ type: onError, payload: error });
  }
};

export default api;
