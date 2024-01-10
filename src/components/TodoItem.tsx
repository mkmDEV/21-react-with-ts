import classes from "./TodoItem.module.css";

type TodoItemProps = {
  text: string;
  onRemoveTodo: () => void;
};

const TodoItem: React.FC<TodoItemProps> = (props) => (
  <li className={classes.item} onClick={props.onRemoveTodo}>
    {props.text}
  </li>
);

export default TodoItem;
