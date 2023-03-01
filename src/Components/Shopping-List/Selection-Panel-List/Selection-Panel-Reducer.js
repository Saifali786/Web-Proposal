const detailPanelReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "ADD_ITEM":
      newState = { ...state, selectedRecipe: action.payload.selectedRecipe };
      break;
    case "UPDATE_ITEM":
      newState = action.payload.state;
      break;
    case "REMOVE_ITEM":
      newState = {
        ...state,
        selectedRecipe: state?.selectedRecipe?.filter(
          (option) => option.id !== action.payload.id
        ),
      };
      break;
    default:
      newState = { ...state };
  }
  return newState;
};

export default detailPanelReducer;
