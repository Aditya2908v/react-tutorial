import { useState, useEffect } from "react";
import React from "react";

const App = () => {
  /*
    in react state refers to the data that is managed within a component and can change over time.

    useState hook is a built in function in react that allows components to have a state.
    provides a way to declare and update the variables.

    useEffecet hook - 
      allows you to perform side effects in functionl components.
      side effects include things like fetching data from an API
      subscribing to events and manipulating to DOM.
  */

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []);

  return (
    <div>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
