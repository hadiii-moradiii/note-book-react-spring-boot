import { useReducer } from "react";
import loginReducer from "./reducers/loginReducer";

const SampleReducer = () => {
  const [auth, dispatch] = useReducer(loginReducer, { isAuthenticated: false });
  if (auth.isAuthenticated) {
    return (
      <>
        <span> welcome back {auth.username}</span>
        <br />
        <button onClick={() => dispatch({ type: "LOGOUT" })}> logout</button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => dispatch({ type: "LOGIN", username: "hadiii" })}>
          login
        </button>
      </>
    );
  }
};

export default SampleReducer;
