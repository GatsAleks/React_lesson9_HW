import { connect } from "react-redux";
import React from "react";
import { deleteTodo } from "../store/actions/action";
import { createTodo } from "../store/actions/action";
import { togleTodo } from "../store/actions/action";
import Form from "./Form";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import "./list.css";

function List({ todos, dispatch }) {
  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  function handleCreateTodo(newTodo) {
    dispatch(createTodo(newTodo));
  }

  function handleTogleTodo(title) {
    dispatch(togleTodo(title));
  }

  return (
    <div className="list">
      <h2>Todo list</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.title}>
              <td
                className={todo.isDone ? "completed" : "uncompleted"}
                onClick={() => handleTogleTodo(todo.title)}
              >
                {todo.title}
              </td>
              <td>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Form handleCreateTodo={handleCreateTodo} />
      </div>
    </div>
  );
}

function mapsStateToProps(state) {
  //   console.log("mapping", state);
  return { todos: state.list };
}

export default connect(mapsStateToProps)(List);
