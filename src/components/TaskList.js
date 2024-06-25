// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions';

const TaskList = ({ setTaskToEdit }) => {
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <ul className="list-none p-0 ">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-gray-700 p-2 my-2 rounded"
        >
          <span>{task.text}</span>
          <div className="space-x-2">
            <button
              onClick={() => setTaskToEdit(task)}
              className="bg-yellow-400 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
