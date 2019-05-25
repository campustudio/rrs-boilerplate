export const updateState = (state, action, key) => {
  return {
    ...state,
    [key]: action.profile,
  };
};

export default updateState;
