export const selectFullTaskState = (reduxState) => reduxState.tasks;

export const selectUncompleted = (reduxState) =>
  reduxState.tasks.tasks.filter((task) => !task.completed);
