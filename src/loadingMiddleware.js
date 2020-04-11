function loadingMiddleware({ dispatch, getState }) {
  return function (next) {
    return async function (action) {
      const isFunction = typeof action == 'function' && action.type;
      if (isFunction) {
        dispatch({ type: `start/${action.type}` });
        const result = await action(dispatch, getState);
        dispatch({ type: `end/${action.type}` });
        return result;
      }
      return next(action);
    };
  };
}

module.exports = loadingMiddleware;
