const CombineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers);
  return (state = {}, action) => {
    const newState = {};

    for (let i = 0; i < reducerKeys.length; i++) {
      const reducerKey = reducerKeys[i];
      const reducer = reducers[reducerKey];
      const newStateForReducer = reducer(state[reducerKey], action);
      newState[reducerKey] = newStateForReducer;
    }

    return newState;
  };
};

export default CombineReducers;
