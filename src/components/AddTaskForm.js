import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasks/slice";

export default function AddTaskForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    console.log("submit", inputText);

    dispatch(addTask(inputText));
    setInputText("");
  };
  return (
    <div id="AddTaskForm">
      <form onSubmit={submit}>
        <label>
          task description:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
