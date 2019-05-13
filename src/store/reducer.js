const math = require('mathjs');

/**
 * Initial State
 */
const initialState = {
  input: '',
};

/**
 * Types
 */
const NEW_INPUT = 'VALUE';
const RESULT = 'RESULT';
const CLEAR = 'CLEAR';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NEW_INPUT:
      return {
        ...state,
        input: state.input + action.input,
      };
    case CLEAR:
      return {
        ...state,
        input: '',
      };
    case RESULT:
      return {
        ...state,
        input: math.eval(state.input),
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const newInput = input => ({
  type: NEW_INPUT,
  input,
});

export const result = () => ({
  type: RESULT,
});

export const clear = () => ({
  type: CLEAR,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
