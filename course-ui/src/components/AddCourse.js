import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form, FormGroup, Input, Button, Container} from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';


const AddCourse = () => {

    useEffect( () => {
        document.title="Add New Course  || Shreyansh Academy";
    },[]);

    const [courseData,setCourse] = useState({}); // 

    //form handler function
    const handleForm = (e) => {    // So when the form gets submitted then this handleForm function gets called
        //console.log(courseData);    // will be able to view the added data in the console 
        postDatatoServer(courseData);     
        e.preventDefault();
    }

    // Creating function to post data on server
    const postDatatoServer = (data) => {           //  So the courses being passed through the function postDatatoServer in handleForm will go to data in here
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
                setCourse({id: "", title: "", description: ""});
            }, (error) =>{
                console.log(error);
                console.log("error");
                toast.success("Something went wrong");
            }
        )
    }

    return (
        <div>
            <h1 className="text-center my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label> 
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e)=>{
                        setCourse({...courseData, id: e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label> 
                    <Input type="text" placeholder="Enter title here" id="title" onChange={(e)=>{
                        setCourse({...courseData, title: e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label> 
                    <Input type="textarea" placeholder="Enter description here" id="description" style={{height:200}}
                    onChange={(e)=>{
                        setCourse({...courseData, description: e.target.value});
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success"> Add Course</Button> {''}
                    <Button type="reset" color="warning" onClick={()=>{
                        setCourse({id: "", title: "", description: ""});    // passing blank object in the function will clear the filled info in the page
                    }}> Clear</Button>
                </Container>
            </Form>
        </div>
    );
};

export default AddCourse;