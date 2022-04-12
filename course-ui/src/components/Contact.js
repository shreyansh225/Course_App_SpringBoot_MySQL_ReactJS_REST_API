import {React,useEffect} from 'react';


const Contact = () => {

    useEffect( () => {
        document.title="Contact Us  || Shreyansh Academy";
    },[]);

    return(

        <div>
            <h1>Contact</h1>
        </div>

    );
}

export default Contact;