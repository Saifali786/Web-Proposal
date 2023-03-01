import React, { useState } from "react";
import "./UpdateRecipe.css";
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'


const UpdateRecipePage = () => {

    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();

        alert("Recipe updated Successfully");
        navigate("/profilepage");
    };


    return (
        <div className="update-recipe">


            <form onSubmit={submitHandler} id="update-recipe-form">
                <h2 className="text-light">Update Recipe</h2>
                <div className="form-group row mt-2">
                    <label className="text-light col-sm-4 col-form-label" htmlFor="title">
                        Title

                    </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" id="title" required />
                    </div>
                </div>

                <div className="form-group row mt-2">
                    <label className="text-light col-sm-4 col-form-label" htmlFor="upload-image">
                        Upload Image
                    </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="file" id="upload-image" />
                    </div>
                </div>

                <div className="form-group row mt-2">
                    <label className="text-light col-sm-4 col-form-label" htmlFor="description">
                        Description
                    </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" id="description" />
                    </div>
                </div>

                <div className="form-group row mt-2">
                    <label className="text-light col-sm-4 col-form-label" htmlFor="ingredients">
                        Ingredients
                    </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" id="ingredients" required />
                    </div>
                </div>

                <div className="form-group row mt-2">
                    <label className="text-light col-sm-4 col-form-label" htmlFor="instructions">
                        Instructions
                    </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" id="instructions" required />
                    </div>
                </div>

                <div className="form-group row mt-2">
                    <label className="text-light col-sm-4 col-form-label" htmlFor="servings">
                        Servings
                    </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" id="servings" required />
                    </div>
                </div>

                <div className="form-group row mt-2">
                    <label className="text-light col-sm-4 col-form-label" htmlFor="servings">
                        Servings
                    </label>
                    <div className="col-sm-8">
                        <input className="form-control" type="text" id="servings" required />
                    </div>
                </div>

                <div>
                    <button className="btn btn-light mt-2" type="submit">
                        Update
                    </button>

                </div>
            </form>
        </div>


    );
};

export default UpdateRecipePage;