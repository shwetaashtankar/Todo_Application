// src/components/TaskInput.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../actions';

const TaskInput = ({ taskToEdit, setTaskToEdit }) => {
  const [task, setTask] = useState(taskToEdit ? taskToEdit.text : '');
  const dispatch = useDispatch();

  // taskToEdit change होने पर input field update करें
  useEffect(() => {
    setTask(taskToEdit ? taskToEdit.text : '');
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      dispatch(editTask({ ...taskToEdit, text: task }));
      setTaskToEdit(null); // Edit mode से exit करें
    } else {
      dispatch(addTask({ id: Date.now(), text: task }));
    }
    setTask(''); // Input field को clear करें
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border rounded p-2 text-black"
        placeholder="Enter your task"
      />
      <button
        type="submit"
        disabled={!task}
        className="bg-blue-500 text-white hover:bg-violet-600 p-2 rounded disabled:bg-gray-300"
      >
        {taskToEdit ? 'Edit' : 'Add'} Task
      </button>
    </form>
  );
};

export default TaskInput;
