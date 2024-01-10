import { useContext, useRef } from "react";
import { TodosContext } from "@store/todos-context.tsx";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const textInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = textInput.current!.value;

    if (value.trim().length === 0) {
      // todo: throw error
      return;
    }

    todosCtx.addTodo(value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={textInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
