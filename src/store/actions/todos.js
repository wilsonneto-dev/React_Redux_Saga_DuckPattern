export const addTodo = txt => ({
  type: 'ADD_TODO',
  payload: { text: txt }
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: { id }
});
