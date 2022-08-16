import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxTasks: 20,
  tasks: [
    { id: 1, task: "Pick up new glasses", completed: true },
    { id: 2, task: "Buy airco", completed: false },
    { id: 3, task: "Take packages to return", completed: false },
    { id: 4, task: "Order dog food", completed: true },
  ],
  showCompletedTasks: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    toggleCompleted: (state, action) => {
      const id = action.payload;
      if (state.tasks.find((task) => task.id === id).completed) {
        state.tasks.find((task) => task.id === id).completed = false;
      } else {
        state.tasks.find((task) => task.id === id).completed = true;
      }
    },
    addTask: (state, action) => {
      if (state.tasks.length >= 20) return;
      const description = action.payload;

      const newTask = {
        id: state.tasks.length + 1,
        task: description,
        completed: false,
      };

      state.tasks = [...state.tasks, newTask];
    },
  },
});

export const { addTask, toggleCompleted } = tasksSlice.actions;

export default tasksSlice.reducer;
