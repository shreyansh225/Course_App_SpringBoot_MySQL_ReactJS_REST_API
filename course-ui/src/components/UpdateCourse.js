import React, { useState } from "react";
import { useEffect} from 'react';
import { Form, FormGroup, Input, Button, Container } from "reactstrap";

const UpdateCourse = () => {

    useEffect( () => {
        document.title="Update Course  || Shreyansh Academy";
    },[]);

    // const [UpData , setCourse] = useState({});

    // //form handler function
    // const handleForm = (e) =>{
    //   postUpdateToServer(UpData);
    //   e.preventDefault();
    // }

    // // Creating function to update data on server
    // const postUpdateToServer = (UpData) => {
      
    // }

  return (
    <div>
      <h1 className="text-center">Update Course Detail</h1>
      <Form>
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 200 }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success"> Update Course</Button> {""}
          <Button color="warning"> Clear</Button>
        </Container>
      </Form>
    </div>
  );
};

export default UpdateCourse;
