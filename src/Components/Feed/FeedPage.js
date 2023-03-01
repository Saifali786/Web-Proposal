import { React, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import "./Feed.css";

export default function FeedPage() {
  const navigate = useNavigate();
  const [state, setstate] = useState({ data: "" });

  function navigateBookmark(e) {
    console.log(e.target.getAttribute("src"));
    console.log("image click");
    navigate("/view-recipe", {
      state: { imgSrc: e.target.getAttribute("src") },
    });
  }

  return (
    <div className="gradient-custom-2">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="14" xl="10">
            <MDBCard className="feed-card">
              {/* <MDBCardBody className="text-black p-4"> */}

              <MDBRow className="g-4">
                <MDBCol className="mb-2">
                  <MDBCardImage
                    src="1.jpg"
                    alt="image 1"
                    className="w-100 rounded-3 pointer"
                    onClick={navigateBookmark}
                  />
                </MDBCol>

                <MDBCol className="mb-2">
                  <MDBCardImage
                    src="2.jpg"
                    alt="image 1"
                    className="w-100 rounded-3 pointer"
                    onClick={navigateBookmark}
                  />
                </MDBCol>

                <MDBCol className="mb-2">
                  <MDBCardImage
                    src="4.jpg"
                    alt="image 1"
                    className="w-100 rounded-3 pointer"
                    onClick={navigateBookmark}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="g-4">
                <MDBCol className="mb-2">
                  <MDBCardImage
                    src="4.jpg"
                    alt="image 1"
                    className="w-100 rounded-3 pointer"
                    onClick={navigateBookmark}
                  />
                </MDBCol>
                <MDBCol className="mb-2">
                  <MDBCardImage
                    src="5.jpg"
                    alt="image 1"
                    className="w-100 rounded-3 pointer"
                    onClick={navigateBookmark}
                  />
                </MDBCol>
                <MDBCol className="mb-2">
                  <MDBCardImage
                    src="1.jpg"
                    alt="image 1"
                    className="w-100 rounded-3 pointer"
                    onClick={navigateBookmark}
                  />
                </MDBCol>
              </MDBRow>
              {/* </MDBCardBody> */}
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <div>
          <MDBBtn
            color="dark"
            onClick={() => navigate("/addrecipe")}
            style={{ height: "36px", overflow: "visible" }}
          >
            Add Recipe
          </MDBBtn>
        </div>
      </MDBContainer>
    </div>
  );
}
