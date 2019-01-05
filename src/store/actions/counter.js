import { ADD, MINUS, ASYNCDATA } from '../types/counter';

export const add = () => {
  return {
    type: ADD,
  };
};
export const minus = () => {
  return {
    type: MINUS,
  };
};
export const asyncAdd = () => {
  return {
    type: ASYNCDATA,
  };
};
