import { ADD, MINUS } from '../types/counter';
import { FETCH_START, FETCH_ERROR, FETCH_SUCCESS } from '../types/common';
const INITIAL_STATE = {
  num: 0,
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1,
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1,
      };
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
