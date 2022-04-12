import React from "react"
import {Card, CardBody} from 'reactstrap';
// Every function returns an html
function Header({ name, title }) // We need to do Object Destructuring in brackets()
{
    return(
        <div>
            <Card className="my-2 bg-warning">
                <CardBody>
                <h1 className="text-center my-2">Welcome to Courses App</h1>
                </CardBody>
            </Card> 
        </div>
    );
}

export default Header; // to make it importable in other components we need to export it from here first





        // // first curly braces{ } specifies the it is a JS code and the second curly braces within{{ }} specifies the JS Object
        // // background, padding are the Properties and red, 20 is value of that property
        // <div style={{ background: "red", padding: 20, width: 400}}>
        //     <h1>Header {title}</h1>
        //     <h2>Coding via {name} </h2>
        //     <p> This is header component for learning purpose</p>
        // </div>