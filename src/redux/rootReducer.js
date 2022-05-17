import counterReducer from "./features/counter.feature";
import employeesReducer from "./features/employees.feature";
import userListReducer from "./features/user-list.feature";
const rootReducer = {
  counter: counterReducer,
  employees: employeesReducer,
  users: userListReducer,
};

export default rootReducer;
