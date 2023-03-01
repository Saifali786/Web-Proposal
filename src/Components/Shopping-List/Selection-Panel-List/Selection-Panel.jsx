import { Autocomplete, Box, Checkbox, Chip, TextField } from "@mui/material";
import React, { useReducer } from "react";

import detailPanelReducer from "./Selection-Panel-Reducer";
import recipeOptions from "../../../assets/mocks/recepie-options";
import SelectedPanel from "../Selected-Panel-List/Selected-Panel-List";
import "./Selection-Panel.css";

function SelectionPanel(props) {
  const initialState = {
    selectedRecipe: props.selectedRecipe,
    clearedRecipe: props.clearedRecipe,
  };
  const [state, dispatch] = useReducer(detailPanelReducer, initialState);

  const handleChange = (event, values) => {
    dispatch({ type: "ADD_ITEM", payload: { selectedRecipe: values } });
  };

  const removeOption = (id, values) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { selectedRecipe: values, id: id },
    });
  };

  const handleRecipeChecked = (event, value) => {
    const localState = { ...state };
    const selectedRecipeIndex = localState?.selectedRecipe?.findIndex(
      (obj) => obj.id === value.id
    );
    const clearedRecipeIndex = localState?.clearedRecipe?.findIndex(
      (obj) => obj.id === value.id
    );
    if (event.target.checked) {
      const selectedRecipe = [
        ...localState?.selectedRecipe?.slice(0, selectedRecipeIndex),
        ...localState?.selectedRecipe?.slice(selectedRecipeIndex + 1),
      ];
      if (clearedRecipeIndex === -1) {
        localState.clearedRecipe.push(value);
      }
      localState.selectedRecipe = selectedRecipe;
    } else if (selectedRecipeIndex === -1) {
      const clearedRecipe = [
        ...localState?.clearedRecipe?.slice(0, clearedRecipeIndex),
        ...localState?.clearedRecipe?.slice(clearedRecipeIndex + 1),
      ];
      localState.clearedRecipe = clearedRecipe;
      localState.selectedRecipe.push(value);
    }

    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        state: localState,
      },
    });
  };

  const { children, value, index, isDeleted } = props;

  return (
    <div role="tabpanel" className="details-panel-container">
      {value === index && !isDeleted && (
        <Box sx={{ pl: 2 }}>
          <div className="heading">{children}</div>
          <Autocomplete
            className="auto-complete-align"
            multiple
            options={recipeOptions}
            disableCloseOnSelect
            renderTags={(values) =>
              values.map((value) => (
                <Chip
                  key={value.id}
                  label={value.recipe}
                  onDelete={() => {
                    removeOption(value.id, values);
                  }}
                />
              ))
            }
            value={state.selectedRecipe}
            getOptionLabel={(option) => option.recipe}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                <span className={selected ? "item-highlight" : ""}>
                  {option.recipe}
                </span>
              </li>
            )}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select Items" />
            )}
          />

          {state.selectedRecipe.length === 0 &&
            state.clearedRecipe.length === 0 && (
              <div className="empty-cart-container">
                <h2>Add item(s) to your list.</h2>
              </div>
            )}
          <div>
            <SelectedPanel
              itemType={"Selected Item(s)"}
              recipesList={state.selectedRecipe}
              handleRecipeChecked={handleRecipeChecked}
              checkedValue={false}
            />

            <SelectedPanel
              itemType={"Checked Item(s)"}
              recipesList={state.clearedRecipe}
              handleRecipeChecked={handleRecipeChecked}
              checkedValue={true}
            />
          </div>
        </Box>
      )}
    </div>
  );
}

export default SelectionPanel;
