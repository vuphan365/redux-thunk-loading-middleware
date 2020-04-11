const initialState = {};

function loadingReducer(state = initialState, action) {
  const type = action.type;
  if (type.substring(0, 6) === 'start/') {
    return {
      ...state,
      [type.substring(6)]: true,
    };
  }
  if (type.substring(0, 4) === 'end/') {
    let newState = Object.assign({}, state);
    delete newState[type.substring(4)];
    return newState;
  }
  return state;
}

module.exports = loadingReducer;
