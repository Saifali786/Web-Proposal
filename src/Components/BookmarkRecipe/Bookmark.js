import "./Bookmark.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import Recipe from "./../Recipe/Recipe";
import CommentList from "./../Comment/CommentList";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./Bookmark.css";

function Bookmark(props) {
  const [bookmarkState, setBookmarkState] = useState(props.bookmarkState);
  const [bookmarkImageSrc, setbookmarkImageSrc] = useState(
    props.bookmarkImageSrc
  );

  let initialList = [];
  const [list, setList] = useState(initialList);

  let nextId = 0;
  //bookmark list

  const { state } = useLocation();

  const { imgSrc } = state;

  const [commentList, setCommentList] = useState([]);
  const [isCommentsSectionVisible, setIsCommentSectionVisible] =
    useState(false);

  const updateCommentListHandler = (newComment) => {
    console.log("inside App.js - updateCommentListHandler", newComment);
    console.log(commentList);

    setCommentList((prevList) => {
      return [newComment, ...prevList];
    });
  };

  const commentsButtonClickHandler = () => {
    console.log("comments clicked");
    setIsCommentSectionVisible(true);
  };

  const closeCommentsSectionHandler = () => {
    setIsCommentSectionVisible(false);
  };

  const deleteCommentByIndex = (index) => {
    console.log("From App.js. Delete comment index found = " + index);

    let tempCommentList = [];

    for (let i = 0; i < commentList.length; i++) {
      if (i == index) continue;

      tempCommentList.push(commentList[i]);
    }

    setCommentList(tempCommentList);
  };

  const updateCommentHandler = (updatedComment, index) => {
    console.log(
      "From App.js. Update comment index found = " + index,
      updatedComment
    );

    let tempCommentList = [];

    for (let i = 0; i < commentList.length; i++) {
      if (i == index) tempCommentList.push(updatedComment);
      else tempCommentList.push(commentList[i]);
    }

    setCommentList(tempCommentList);
  };

  const onClickBookmarkHandler = () => {
    //negatation
    const mybool = !bookmarkState;
    console.log(mybool);
    setBookmarkState(mybool);
    if (mybool) {
      console.log("inside bookmark state true");
      setbookmarkImageSrc("selected.jpg");
      toast.success("Recipe Saved to Profile !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      var newList = list.concat("Quickie Recipe");
      setList(...list, newList);
      console.log(newList);
      localStorage.setItem("list", JSON.stringify(newList));
    } else {
      console.log("inside bookmark state false");
      setbookmarkImageSrc("unselected.jpg");
      toast.success("Recipe Removed from Profile !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      const newList = list.filter(function (item) {
        return item !== "Quickie Recipe";
      });
      setList(newList);
      console.log(newList);
      localStorage.setItem("list", JSON.stringify(newList));
    }
  };

  return (
    <>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <Col
            xs={8}
            style={{ backgroundColor: "#dbf0f0", height: "140vh" }}
            className="container-style"
          >
            <Row className="mt-4">
              <Typography variant="h4" align="center">
                <b>Quickie Recipe</b>
              </Typography>
            </Row>
            <br></br>
            {/* <Row>
              <div>
                <img src="recipe.jpg" width="200" height="200" />
              </div>
            </Row> */}
            <br></br>
            <Row>
              <Col>
                {/* <Box
                  component="img"
                  sx={{
                    height: 350,
                    width: 350,
                    maxHeight: { xs: 350, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                    alignItems: "center",
                  }}
                  alt="Recipe"
                  src={imgSrc}
                  m="auto"
                /> */}

                <Recipe
                  likeState={true}
                  likeCounter={0}
                  likeButtonText={"Like"}
                  likedButtonImageSrc={"unliked.png"}
                  onCommentButtonClicked={commentsButtonClickHandler}
                  recipeImage={imgSrc}
                />

                {isCommentsSectionVisible && (
                  <div className="overlay-box">
                    <CommentList
                      commentList={commentList}
                      onCommentListUpdate={updateCommentListHandler}
                      deleteCommentHandler={deleteCommentByIndex}
                      closeCommentsSection={closeCommentsSectionHandler}
                      updateCommentHandler={updateCommentHandler}
                    />
                  </div>
                )}
              </Col>
              <Col className="px-5">
                <Typography variant="h5" align="left">
                  Description:
                </Typography>
                <Typography variant="body1" align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col
            xs={2}
            style={{ backgroundColor: "#f0f0db", height: "140vh" }}
            className="container-style"
          >
            <br></br>
            <div>
              {/* <img src={bookmarkImageSrc}></img> <button onClick={onClickBookmarkHandler}>Click Me!</button> */}
              <img
                src={bookmarkImageSrc}
                width="40"
                height="40"
                alt="Bookmark"
                onClick={onClickBookmarkHandler}
              />
            </div>
          </Col>
        </MDBRow>
      </MDBContainer>
      <ToastContainer autoClose={5000} />
    </>
  );
}

export default Bookmark;
