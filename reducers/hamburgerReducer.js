const hamburgerReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_HAMBURGER_ACTIVE":
      return {
        ...state,
        isHamburgerActive: action.payload,
      };
    default:
      return state;
  }
};

export default hamburgerReducer;
