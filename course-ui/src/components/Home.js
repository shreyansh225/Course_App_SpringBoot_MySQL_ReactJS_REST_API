import React, { useEffect } from "react";
import { Button } from "reactstrap";
import AddCourse from "./AddCourse";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Home = () => {

    useEffect( () => {
        document.title="Home || Shreyansh Academy";
    },[]);

  return (
    <div className="jumbotron text-center ">
      <h1 className="display-3">Shreyansh Academy</h1>
      <p>
        Developed by Shreyansh Gupta for basic understanding of Spring Boot
        Backend, React Frontend and their Connections
      </p>
      <div className="container">
        <Link className="" tag="a" to="/add-course" action>
          <Button color="primary" outline>
            Start Using
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

// bg-warning
