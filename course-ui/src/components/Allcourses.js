import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Course from "./Course"
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
import App from "../App";





//we have used a functional component here not a class based function
const Allcourse = () => {    // passing object course
    
    // The reason we used blank array [] is So the function we have passed in the useEffect will only execute when the component is mounted
    // and if u want it to run when the component is updated too then remove []
    useEffect( () => {
        //alert("testing");
        document.title = "View All Courses  || Shreyansh Academy"; 
    }, [] );   //here we have passed a blank array [] to stop the refresh after every action on the Allcourses page


    // function to call server for ( @GetMapping("/courses")  )


    const getAllCoursesFromServer = () => {      
        axios.get(`${base_url}/courses`).then(
            (response)=> {
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("courses has been loaded");

                setCourses(response.data);   //  using response.data the data will be fetched from the backend using the setCourses function; not from the below array data in setCourses
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Something really went wrong" , { position: "bottom-center",});
            }
        );

    };

    // const getAllCoursesFromServer = () => {      
    //     axios.get(`${base_url}/courses`).then(
    //         (response)=> {
    //             //success
    //             console.log(response);
    //             //console.log(response.data);
    //             toast.success("courses has been loaded");
    //         },
    //         (error) => {
    //             //for error
    //             console.log(error);
    //             toast.error("Something really went wrong");
    //         }
    //     );

    // };



    useEffect( () => {
        getAllCoursesFromServer();
    }, []);



    // So the setCourses function will update courses
    const [courses,setCourses] = useState([          // useState is a Hook that enables the states // to use Class based functionallity we use hooks
                                     
        // {title:"Java Course",description:"this is just testing"},     //These are array of objects
        // {title:"Django Course",description:"this is demo"},
        // {title:"React Course",description:"this is UI Course"},
        // {title:"Angular Course",description:"this is UI Course"}
    ]);
    
    const removeCourseById=(id)=>{
        setCourses(courses.filter((c) => c.id != id));
    };

    

    return(
        <div>
            {/* <Button onClick = { () => {     // To check the above useage of blank array []
                console.log("test");
                setCourses([...courses, {title: " Latest Course ", description: "This is demo"}, ]);
            }}>  Test  </Button> 
            */}
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>

            {
               courses.length > 0 ? courses.map((item)=>(<Course key={item.id} course={item} update={removeCourseById}/>)): "No Courses"
            }
        </div>
    )
}

export default Allcourse;
