import React, { useState } from "react";
import "./AddRecipe.css";
import "react-dropdown/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const AddRecipePage = () => {
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    alert("Reciped Added Successfully");
    document.getElementById("add-recipe-form").reset();
    navigate("/profilepage");
  };

  return (
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="14" xl="10">
          <div className="add-recipe">
            <form onSubmit={submitHandler} id="add-recipe-form">
              <h2 className="text-dark mb-4">Add New Recipe</h2>
              <div className="form-group row mt-2">
                <label
                  className="text-dark col-sm-4 col-form-label fw-bold"
                  htmlFor="title"
                >
                  Title
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    id="title"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label
                  className="text-dark col-sm-4 col-form-label fw-bold"
                  htmlFor="upload-image"
                >
                  Upload Image
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="file"
                    id="upload-image"
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label
                  className="text-dark col-sm-4 col-form-label fw-bold"
                  htmlFor="description"
                >
                  Description
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    id="description"
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label
                  className="text-dark col-sm-4 col-form-label fw-bold"
                  htmlFor="ingredients"
                >
                  Ingredients
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    id="ingredients"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label
                  className="text-dark col-sm-4 col-form-label fw-bold"
                  htmlFor="instructions"
                >
                  Instructions
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    id="instructions"
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-2">
                <label
                  className="text-dark col-sm-4 col-form-label fw-bold"
                  htmlFor="servings"
                >
                  Servings
                </label>
                <div className="col-sm-8">
                  <input
                    className="form-control"
                    type="text"
                    id="servings"
                    required
                  />
                </div>
              </div>

              <div>
                <button className="btn btn-dark mt-5 mb-4" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddRecipePage;
