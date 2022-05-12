import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  incrementBy,
  decrement,
} from "../redux/features/counter.feature";

let CounterRedux = () => {
  let dispatch = useDispatch();

  // get data from redux store
  let counterState = useSelector((state) => {
    return state["counter"];
  });

  let { count } = counterState;

  let incrementCliked = () => {
    dispatch(increment());
  };

  let incrementBy5Cliked = () => {
    dispatch(incrementBy(5));
  };

  let decrementCliked = () => {
    dispatch(decrement());
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3 display-2">{count}</p>
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

export default CounterRedux;
