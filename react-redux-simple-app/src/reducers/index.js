//初期値
const initialState = {
  count: 0,
  user: {
    name: 'hoge',
    age: 11,
  },
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'count_increment':
      return { ...state, count: state.count + 1 };
    case 'age_increment':
      //deep copy
      const newState = JSON.parse(JSON.stringify(state));
      newState.user.age = state.user.age + 1;
      return newState;
    default:
      return state;
  }
};

export { reducer };
