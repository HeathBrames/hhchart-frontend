import React from 'react';

import {Button, Card, Col, Accordion, Form} from "react-bootstrap";

const Sidebar = ({ node, onClickClose }) => {

  const handleSubmitEdit = async (e) => {
    // add: onClickClose
    e.preventDefault();
    const form = e.currentTarget;
    const url = 'edit employee endpoint placeholder';
    const body = {
      'newName': form.editName.value,
      'newTitle': form.editTitle.value,
      'newEmail': form.editEmail.value
    }
    console.log(body.newName)
    console.log(body.newTitle)
    console.log(body.newEmail)
    try {
      const respone = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': JSON.stringify(body).length
        },
        body: JSON.stringify(body)
      });
      const text = 'response from backend placeholder' // change to await response.text();
      if (true) { // change to 'response.ok' when endpoint is set up
        console.log(text);
        // modify org chart accordingly
      } else {
        alert(text);
      }
    } catch (err) {
      console.error(err);
      console.log(JSON.stringify(body));
    }
  }

  const handleSubmitMove = async (e) => {
    // add: onClickClose
    e.preventDefault();
    const form = e.currentTarget;
    const url = 'move employee endpoint placeholder';
    const body = {
      'newManager': form.moveManager.value
    }
    console.log(body.newManager)
    try {
      const respone = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': JSON.stringify(body).length
        },
        body: JSON.stringify(body)
      });
      const text = 'response from backend placeholder' // change to await response.text();
      if (true) { // change to 'response.ok' when endpoint is set up
        console.log(text);
        // modify org chart accordingly
      } else {
        alert(text);
      }
    } catch (err) {
      console.error(err);
      console.log(JSON.stringify(body));
    }
  }

  const handleSubmitDelete = async (e) => {
    // add: onClickClose
    e.preventDefault();
    const form = e.currentTarget;
    const url = 'delete employee endpoint placeholder';
    const body = {
      'currManager': form.deleteManager.value
    }
    console.log(body.newManager)
    try {
      const respone = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': JSON.stringify(body).length
        },
        body: JSON.stringify(body)
      });
      const text = 'response from backend placeholder' // change to await response.text();
      if (true) { // change to 'response.ok' when endpoint is set up
        console.log(text);
        // modify org chart accordingly
      } else {
        alert(text);
      }
    } catch (err) {
      console.error(err);
      console.log(JSON.stringify(body));
    }
  }

  return node && (
    <div className="side-bar">
      {/*This is the close button*/}  
      <Col className="text-center">
        <Button id="close-btn" variant="btn" className="mb-3" onClick={onClickClose}>
          {<div className="user-icon">
          <i class="fas fa-times" id="profile-icon"></i>
          </div>}
        </Button>
      </Col>
      {/*This is the profile picture and employee information displayed*/}
      <Card className="mb-4">
          <Card.Img variant="top" src="/logo512.png" height="250px" />
          <Card.Body className="employee-display-info">
            <Card.Title>{node.name}</Card.Title>
            <Card.Text>{node.title}</Card.Text>
            <Card.Text>{node.id}</Card.Text>
          </Card.Body>
        </Card>
      {/*This is a card that contains an accordion.  Inside each accordion card, there is a nested form*/}
      <Card>
          <Accordion>
            {/*This is the 'edit employee' section button*/}
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="none" eventKey="0">
                  Edit Employee<i className="fas fa-edit"></i>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Form className="form-body" onSubmit={handleSubmitEdit}>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control className="placeholder-text" type="text" placeholder="New Name" name="editName"/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Title</Form.Label>
                      <Form.Control className="placeholder-text" type="text" placeholder="New Title" name="editTitle"/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control className="placeholder-text" type="text" placeholder="New Email" name="editEmail"/>
                    </Form.Group>
                  </Form>
                  <Col className="text-center">
                    <Button id="request-btn" variant="none" className="mb" type="submit" onClick={onClickClose}>Update</Button>
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            {/*This is the 'move employee' section*/}
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="none" eventKey="1">
                Move Employee<i class="fas fa-exchange-alt"></i>
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Form className="form-body" onSubmit={handleSubmitMove}>
                    <Form.Group>
                      <Form.Label>Enter New Manager</Form.Label>
                      <Form.Control className="placeholder-text" type="text" placeholder="New Manager" name="moveManager"/>
                    </Form.Group>
                  </Form>
                  <Col className="text-center">
                    <Button id="request-btn" variant="none" className="mb" type="submit" onClick={onClickClose}>Request Move</Button>
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            {/*This is the 'delete employee' section*/}
            <Card>
              <Card.Header>
  <Accordion.Toggle as={Button} variant="none" eventKey="2">Delete Employee<i className="fas fa-user-minus"></i></Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Form className="form-body" onSubmit={handleSubmitDelete}>
                    <Form.Group>
                      <Form.Label>Enter Current Manager</Form.Label>
                      <Form.Control className="placeholder-text" type="text" placeholder="Manager" name="deleteManager"/>
                    </Form.Group>
                  </Form>
                  <Col className="text-center">
                    <Button id="request-btn" variant="none" className="mb" type="submit" onClick={onClickClose}>Request Deletion</Button>
                  </Col>
                </Card.Body>
              </Accordion.Collapse>

          </Card>
          
          </Accordion>
        </Card>
    </div>
  );
};

export default Sidebar;