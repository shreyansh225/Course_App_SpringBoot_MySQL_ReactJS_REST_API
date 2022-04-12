import {React,useEffect} from 'react';


const About = () => {

    useEffect( () => {
        document.title="About Us  || Shreyansh Academy";
    },[]);

    return(

        <div>
            <h1>About Us</h1>
        </div>

    );
}

export default About;

