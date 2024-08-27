import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteTask, completeTask } from '../redux/todoSlice';
import { FaCheck, FaTrash } from 'react-icons/fa';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
        >
          <span
            className={`flex-grow ${task.completada ? 'line-through text-gray-400' : ''}`}
          >
            {task.texto}
          </span>
          <div className="flex mt-2 sm:mt-0">
            <button
              onClick={() => dispatch(completeTask(task.id))}
              className={`mx-1 p-2 rounded-lg ${task.completada ? 'bg-yellow-500' : 'bg-green-500'} text-white hover:opacity-80 transition-all`}
            >
              <FaCheck />
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="mx-1 p-2 bg-red-500 text-white rounded-lg hover:opacity-80 transition-all"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
