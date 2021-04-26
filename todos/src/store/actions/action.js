export const ACTION_DELETE_TODO = "delete";
export function deleteTodo(id) {
  return { type: ACTION_DELETE_TODO, payload: id };
}

export const ACTION_CREATE_TODO = "create";
export function createTodo(newTodo) {
  return { type: ACTION_CREATE_TODO, payload: newTodo };
}

export const ACTION_TOGLE_TODO = "togle";
export function togleTodo(title) {
  return { type: ACTION_TOGLE_TODO, payload: title };
}
