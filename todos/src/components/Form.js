import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import "./form.css";

export default function Form({ handleCreateTodo }) {
  const emptyTodo = {
    id: "",
    title: "",
    isDone: false,
  };

  const [formState, setFormState] = useState(emptyTodo);

  const onFormSubmit = (e) => {
    if (formState.title === "") return onCancelInput();
    handleCreateTodo(formState);
    onCancelInput();
  };

  const onCancelInput = (e) => {
    setFormState(emptyTodo);
  };

  const onInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <h3>Create new todo</h3>
      <input
        type="text"
        name="title"
        value={formState.title}
        onChange={onInputChange}
      />

      <div className="button">
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onFormSubmit}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={onCancelInput}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
