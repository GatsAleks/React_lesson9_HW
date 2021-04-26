import { ACTION_DELETE_TODO } from "../actions/action";
import { ACTION_CREATE_TODO } from "../actions/action";
import { ACTION_TOGLE_TODO } from "../actions/action";

const INITIAL_STATE = {
  list: [
    { id: 2, title: "Inicialization", isDone: true },
    { id: 3, title: "Creation", isDone: false },
    { id: 4, title: "Observing", isDone: false },
    { id: 5, title: "Analizing", isDone: true },
    { id: 6, title: "Compairing", isDone: false },
    { id: 7, title: "Review", isDone: true },
    { id: 8, title: "Testing", isDone: true },
    { id: 9, title: "Finishing", isDone: false },
  ],
};
export default function reducer(state = INITIAL_STATE, { type, payload }) {
  // console.log("reducer", type, payload);
  switch (type) {
    case ACTION_TOGLE_TODO:
      return {
        ...state,
        list: state.list.map((item) => {
          return item.title === payload
            ? { ...item, isDone: !item.isDone }
            : item;
        }),
      };

    case ACTION_CREATE_TODO:
      return {
        ...state,
        list: [...state.list, payload],
      };

    case ACTION_DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
}
