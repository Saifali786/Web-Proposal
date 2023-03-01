import './Recipe.css'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

function Recipe(props) 
{
    const[likeState, setLikeState] = useState(props.likeState);
    const[likeCounter, setLikeCounter] = useState(props.likeCounter);
    const[likeButtonText, setLikeButtonText] = useState(props.likeButtonText);
    const[likedButtonImageSrc, setLikedButtonImageSrc] = useState(props.likedButtonImageSrc);

    const clickLikeHandler = () => 
    {
        setLikeState(!likeState);

        if(likeState)
        {
            setLikeCounter(likeCounter + 1);
            setLikeButtonText("Unlike");
            setLikedButtonImageSrc("liked.png");
        }
        else
        {
            setLikeCounter(likeCounter - 1);
            setLikeButtonText("Like"); 
            setLikedButtonImageSrc("unliked.png");
        }
    }
  
    return (
        <div className='recipe-container'>
            <Row>
                <Col className='recipe-post-bottom-bar'>
                    <img alt={props.recipeImage} src={props.recipeImage} className="recipe-dish-image"></img>
                    <Row>
                        <Col md={3}>
                            <div className="likeButtonDiv">
                                <img alt='likeButton' className="likeButtonImage" src={likedButtonImageSrc}></img> {likeCounter} <button onClick={clickLikeHandler}>{likeButtonText}</button>
                            </div>
                        </Col>
                        <Col>
                            <button className="recipe-post-button-comments" onClick={props.onCommentButtonClicked}>Comments</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </div>
    );
}

export default Recipe;