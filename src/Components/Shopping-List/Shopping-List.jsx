import React from "react";
import {
  Box,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import SelectionPanel from "./Selection-Panel-List/Selection-Panel";
import "./Shopping-List.css";

function ShoppingList() {
  const [value, setValue] = React.useState(0);
  const [tabs, setTabs] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [itemName, setItemName] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      const firstVisibleIndex = tabs.findIndex((item) => !item.isDeleted);
      setValue(firstVisibleIndex);
    }, 100);
  }, [tabs]);

  const handleChange = (event, newTabIndex) => {
    if (newTabIndex !== undefined) {
      setValue(newTabIndex);
    }
  };

  const handleClose = () => {
    if (itemName) {
      const newTabObject = {
        name: itemName,
        id: tabs.length + 1,
        isDeleted: false,
        selectedRecipe: [],
        clearedRecipe: [],
      };
      setOpen(false);
      setFocus(false);
      setTabs([...tabs, newTabObject]);
      setValue(0);
      setItemName("");
    } else {
      setFocus(true);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const deleteSelectedTab = (selectedIndex) => {
    let totalTabs = [...tabs];
    if (selectedIndex > -1) {
      totalTabs[selectedIndex].isDeleted = true;
    }
    setTabs(totalTabs);
  };

  const showDefaultView = () => {
    if (tabs.length === 0) {
      return true;
    } else {
      const deleteFlag =
        tabs.filter((item) => item.isDeleted).length === tabs.length;
      return deleteFlag;
    }
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="14" xl="10">
          {showDefaultView() && (
            <div className="default-view-container">
              <div className="image-comtainer">
                <img
                  src="empty.jpg"
                  alt="empty-list-logo"
                  className="empty-list-logo"
                />
                <h2>Oops, you don't have any shopping list.</h2>
              </div>
              <Button
                className="button-style"
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen}
              >
                Get Started
              </Button>
            </div>
          )}
          {!showDefaultView() && (
            <Box className="shopping-list-container">
              <div className="tab-container">
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical Tabs"
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  {tabs.map((tabValue, index) => {
                    return (
                      <Tab
                        label={tabValue.name}
                        {...a11yProps(index)}
                        key={index}
                        className={`align-items ${
                          tabValue.isDeleted ? "hidden" : ""
                        }`}
                        icon={
                          <DeleteForeverIcon
                            onClick={() => {
                              deleteSelectedTab(index);
                            }}
                          />
                        }
                        iconPosition="end"
                      />
                    );
                  })}
                </Tabs>
                <Button
                  className="button-style"
                  variant="outlined"
                  color="secondary"
                  onClick={handleClickOpen}
                >
                  + Add New List
                </Button>
              </div>
              <div className="tab-panel-container">
                {tabs.map((tabValue, index) => {
                  return (
                    <SelectionPanel
                      key={index}
                      value={value}
                      selectedRecipe={tabValue.selectedRecipe}
                      clearedRecipe={tabValue.clearedRecipe}
                      isDeleted={tabValue.isDeleted}
                      index={index}
                    >
                      {tabValue.name}
                    </SelectionPanel>
                  );
                })}
              </div>
            </Box>
          )}
          <Dialog open={open} disableEscapeKeyDown>
            <DialogTitle>Enter Shopping List Name</DialogTitle>
            <DialogContent>
              <TextField
                error={!itemName && focus ? true : false}
                helperText={
                  !itemName && focus ? "Please Enter Shopping List Name." : ""
                }
                required
                aria-label="List Name"
                aria-required="true"
                label="List Name"
                type="text"
                inputProps={{ maxLength: 50 }}
                fullWidth
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
                onFocus={() => {
                  setFocus(true);
                }}
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => {
                  setFocus(false);
                  setOpen(false);
                  setItemName("");
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleClose}>Save</Button>
            </DialogActions>
          </Dialog>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ShoppingList;
