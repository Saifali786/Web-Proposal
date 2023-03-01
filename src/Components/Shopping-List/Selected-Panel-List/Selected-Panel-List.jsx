import React from "react";
import { Checkbox } from "@mui/material";

import "./Selected-Panel-List.css";

function SelectedPanel(props) {
  return (
    <div>
      {props.recipesList.length > 0 && (
        <div className="sub-heading">{props.itemType}</div>
      )}
      <ul>
        {props.recipesList.map((recipes, index) => {
          return (
            <li key={index}>
              <div className="align-selected-items">
                <span className={props.checkedValue ? "item-checked" : ""}>
                  {recipes.recipe}
                </span>
                <Checkbox
                  checked={props.checkedValue}
                  onChange={(event) =>
                    props.handleRecipeChecked(event, recipes)
                  }
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SelectedPanel;
