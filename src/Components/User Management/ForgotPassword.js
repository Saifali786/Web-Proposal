import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./userManagement.css";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (email === "saif@gmail.com") {
      navigate("/security-question");
    } else {
      alert("Email is incorrect");
      setEmail("");
    }
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Card
          style={{ width: "30rem", height: "20rem" }}
        >
          <Card.Body>
            <h2 className="text-center mb-4">Reset Password</h2>
            <Form onSubmit={handleSubmit}>
              <div style={{ textAlign: "left" }}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
