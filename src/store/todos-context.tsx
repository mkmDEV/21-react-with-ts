import React, { useState } from "react";
import Todo from "@models/todo.ts";

type TodosContextProps = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type ProviderProps = { children: React.ReactNode };

export const TodosContext = React.createContext<TodosContextProps>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC<ProviderProps> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prev) => prev.concat(newTodo));
  };

  const handleRemoveTodo = (id: string) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const contextValue: TodosContextProps = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
