import { useSelector } from "react-redux";
import {
  selectFullTaskState,
  selectUncompleted,
} from "../store/tasks/selectors";

import { useDispatch } from "react-redux";
import {
  toggleCompleted,
  deleteTask,
  toggleShowCompletedButton,
  changeMaxTasks,
} from "../store/tasks/slice";

export default function TaskList() {
  const dispatch = useDispatch();
  const fullTaskState = useSelector(selectFullTaskState);
  const uncompletedTasks = useSelector(selectUncompleted);

  const renderList = fullTaskState.showCompletedTasks
    ? fullTaskState.tasks
    : uncompletedTasks;

  return (
    <div id="TaskList" style={{ backgroundColor: "beige" }}>
      <label>
        max task amount:
        <input
          type="number"
          min={1}
          max={99}
          value={fullTaskState.maxTasks}
          onChange={(e) => dispatch(changeMaxTasks(e.target.value))}
        />
      </label>
      <ul>
        {renderList.map((task) => (
          <li key={task.id} style={{ margin: "20px", border: "1px solid" }}>
            <p>
              {task.task}{" "}
              <button onClick={() => dispatch(deleteTask(task.id))}>X</button>
            </p>{" "}
            <label>
              <small>completed?</small>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleCompleted(task.id))}
              />
            </label>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(toggleShowCompletedButton())}>
        show/hide completed tasks
      </button>
    </div>
  );
}
