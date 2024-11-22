import { configureStore, createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("employees");
  return data ? JSON.parse(data) : [];
};

const employeesSlice = createSlice({
  name: "employees",
  initialState: loadFromLocalStorage(),
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(state));
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export const store = configureStore({
  reducer: {
    employees: employeesSlice.reducer,
  },
});
