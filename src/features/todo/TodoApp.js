import { Container } from '@material-ui/core';
import TodoList from './TodoList';

function TodoApp() {
  return (
    <Container maxWidth="sm">
      <TodoList />
    </Container>
  );
}

export default TodoApp;
