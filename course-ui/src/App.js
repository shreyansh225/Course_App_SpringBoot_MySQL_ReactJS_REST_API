import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import Menus from './components/Menus';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

function App(){    // functional component
  const btnHandle = () => {     // Arrow Function
      toast("this is my first message");
  };
  const notify = () => {
      toast.success("done", {position: "top-center"} );
  };

  return (
    <div>
      <Router>
      <ToastContainer />  {/* ToastContainer is a self closing tag */}
      <Container>
        <Header/>
        <Row>
          <Col md={3}>
              <Menus />
          </Col>
          <Col md={9}>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/add-course" element={<AddCourse />} exact/>
          <Route path="/update-course" element={<UpdateCourse />} exact/>
          <Route path="/view-courses" element={<Allcourses />} exact/>
          <Route path="/about-us" element={<About />} exact/>
          <Route path="/contact" element={<Contact />} exact/>
        </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
      {/*
      <Home/>
       <Course 
        course={{title:"Django Course", description:"this is just testing"}}
      />                             In course we have to pass the objects title and description 
      <Course 
        course={{title:"Java Course", description:"this is just testing"}}
      />  

      <Allcourses/>

      <AddCourse/>
      <hr/>
      <UpdateCourse/>
      */}

    </div>
  );
}

export default App;


// <h1>This is bootstrap component</h1> 
// <Button color="success" outline onClick={notify} > First React Button </Button>
// <Button color="warning" outline onClick={btnHandle} > Second React Button </Button>  



    // // React js does not allow parallel components like <h1>Startup app</h1><p>My first app</p>, So we have to put it all under a div tag
    // <div>   
    //   {/* name and title are called props(properties) */}
    //   <Header name = "Shreyansh Gupta" title= "first card" />          {/*  Refernce from Header.js */}
    //   <hr/>
    //   <Header name = "Narendr Modi" title= "second card" /> {/*  Header is like a function call to Header.js */}
    //   <hr/>
    //   <h1>Startup app</h1>
    //   <p>My first app</p> 
    //   <hr/>  
    //   <Header name = "Rahul" title= "second card" />
    //   <hr/>
    //   <Header name = "Shyam" title= "second card" />
    //   </div>