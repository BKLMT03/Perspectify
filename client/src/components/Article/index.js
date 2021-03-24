import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./style.css";

const Article = ({title, description, url, image, date}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    
    <>
      <Card bsPrefix="article" style={{ width: "12rem" }}>
        <Card.Img variant="top" src="holder.js/75px75" />
        <Card.Body>
          <Card.Title>Article Title</Card.Title>
          <Card.Text>Some Sample Text </Card.Text>
          <Button  variant="outline-dark" onClick={handleShow}>
            Go Deeper
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={false}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
      >
        <Modal.Body>Article?</Modal.Body>
        <Modal.Footer>
          <div>
            <Form>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I read this article" />
              </Form.Group>
            </Form>
          </div>
          <div>
            <Button>Save to My Articles</Button>
            <Button>Close</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Article;
