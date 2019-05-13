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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
