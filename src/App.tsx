import TodosContextProvider from "@store/todos-context.tsx";

import NewTodo from "@components/NewTodo.tsx";
import Todos from "@components/Todos.tsx";

import "./App.css";

const App = () => {
  return (
    <TodosContextProvider key={"provider"}>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
};

export default App;
