import { useSelector } from "react-redux";
import {
  selectFullTaskState,
  selectUncompleted,
} from "../store/tasks/selectors";

import { useDispatch } from "react-redux";
import { toggleCompleted } from "../store/tasks/slice";

export default function TaskList() {
  const dispatch = useDispatch();
  const fullTaskState = useSelector(selectFullTaskState);
  const uncompletedTasks = useSelector(selectUncompleted);

  const renderList = fullTaskState.showCompletedTasks
    ? fullTaskState.tasks
    : uncompletedTasks;

  return (
    <div id="TaskList" style={{ backgroundColor: "beige" }}>
      <ul>
        {renderList.map((task) => (
          <li key={task.id} style={{ margin: "20px", border: "1px solid" }}>
            <p>{task.task}</p>
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
    </div>
  );
}
