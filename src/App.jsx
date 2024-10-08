import { useState } from "react";
import "./App.css";

const App = () => {
  const [sign, setSign] = useState("Login");
  const [text, setText] = useState("Don't have an account");

  const TogleSign = () => {
    if (sign === "Login") {
      setSign("SignUp");
      setText("Don't have an account");
    } else {
      setSign("Login");
      setText("Already have an account");
    }
  };

  return (
    <div>
      <form>
        <div className="input">
          {sign === "Login" ? (
            <>
              <input type="email" placeholder="Enter the email" />
              <input type="password" placeholder="Enter the password" />
            </>
          ) : (
            <>
              <input type="text" placeholder="Enter the name" />
              <input type="email" placeholder="Enter the email" />
              <input type="password" placeholder="Enter the password" />
            </>
          )}
        </div>

        <button onClick={TogleSign} type="submit">
          {sign}
        </button>

        <div className="agree">
          <input type="checkbox" />
          <p>Agree with all Terms and conditions</p>
        </div>

        <div className="last">
          <p>{text} ?</p>
          <p>
            <b onClick={TogleSign}>{sign}</b>
          </p>
        </div>
      </form>
    </div>
  );
};

export default App;
