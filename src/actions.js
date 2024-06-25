// src/actions.js
export const ADD_TASK = 'ADD_TASK'; // Task जोड़ने का action type
export const EDIT_TASK = 'EDIT_TASK'; // Task edit करने का action type
export const DELETE_TASK = 'DELETE_TASK'; // Task delete करने का action type

// Task जोड़ने का action creator
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

// Task edit करने का action creator
export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

// Task delete करने का action creator
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
