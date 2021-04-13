const initialState = [];

export function resultsReducer(state = initialState, action) {
  if (action.type === 'SAVE_RESULTS/fulfilled') {
    return action.payload.slice(0, 4);
  }

  return state
}
