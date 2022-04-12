import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import base_url from "../api/bootapi";



const Course = ({course, update}) => {    // pasing object course

    const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`).then(   // $ indicates the dynamic value
        (response)=>{
            toast.success("deleted course");
            update(id);        // update funtion edefinition present in Allcourses
        },
        (error)=>{
            toast.success("course not deleted!! Server error");
        }
    )           
    }

    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>     {/*  {course.title} is a variable */}
                <CardText className="">{course.description}</CardText>
                <Container className="text-center">
                    
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>  {''}

                    <Link className="" tag="a" to="/update-course" action>   
                        <Button color="warning">Update</Button>
                    </Link>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;
