import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./userManagement.css";

export const SecurityQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer);
    if (answer === "15") {
      navigate("/new-password");
    } else {
      alert("Answer is incorrect. Enter a correct answer");
      setAnswer("");
    }
  };
  return (
    <>
      <div>
        <Card style={{ width: "30rem", height: "20rem" }} className="align-container">
          <Card.Body>
            <h2 className="text-center mb-4">Security Question</h2>
            <Form onSubmit={handleSubmit}>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="Security Question">
                  <Form.Label>Security Question</Form.Label>
                  <Form.Select
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  >
                    <option value="">--Select a question--</option>
                    <option disabled>
                      What is the street name where you lived when you were 8
                      years old?
                    </option>
                    <option disabled>What is your mother's middle name?</option>
                    <option>
                      How old were you when you got your first phone?
                    </option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="Answer">
                  <Form.Label>Answer</Form.Label>
                  <Form.Control
                    name="answer"
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    onSubmit={handleSubmit}
                    required
                  />
                </Form.Group>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  style={{
                    marginTop: "30px",
                  }}
                  type="submit"
                >
                  Next
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
