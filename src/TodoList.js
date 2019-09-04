import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as TodoActions from './store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => {
  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            &nbsp;&nbsp;
            <button
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo('new')}>OK</button>
    </>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, text: PropTypes.string })
  ),
  removeTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
