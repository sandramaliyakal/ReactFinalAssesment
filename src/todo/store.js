import { createStore } from 'redux';

const initialState = {
  todos: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.payload,
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
