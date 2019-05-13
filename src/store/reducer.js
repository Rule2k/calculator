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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
