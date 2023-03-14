import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';
import { CheckCircleOutline, RadioButtonUnchecked } from '@material-ui/icons';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      dispatch({ type: 'SET_TODOS', payload: response.data });
    });
  }, [dispatch]);

  function handleToggle(todoId) {
    dispatch({ type: 'TOGGLE_TODO', payload: todoId });
  }

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id} button onClick={() => handleToggle(todo.id)}>
          <ListItemIcon>
            {todo.completed ? <CheckCircleOutline /> : <RadioButtonUnchecked />}
          </ListItemIcon>
          <ListItemText primary={todo.title} />
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
