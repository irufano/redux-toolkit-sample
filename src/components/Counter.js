import React, { useState } from "react";

let Counter = () => {
  let [state, setState] = useState({ count: 0 });

  let incrementCliked = () => {
    setState({ count: state.count + 1 });
  };

  let incrementBy5Cliked = () => {
    setState({ count: state.count + 5 });
  };

  let decrementCliked = () => {
    setState({ count: state.count - 1 });
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3 display-2">{state.count}</p>
                <button
                  className="btn btn-success m-1"
                  onClick={incrementCliked}
                >
                  +
                </button>
                <button
                  className="btn btn-warning m-1"
                  onClick={decrementCliked}
                >
                  -
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={incrementBy5Cliked}
                >
                  +5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
