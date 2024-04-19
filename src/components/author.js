import React, { useState, useEffect} from "react";

const Author = (props) => {

    //contains JSON object of all author information for single author
    const [state, setState] = useState({
        position: props.position,
        fname: "",
        lname: "",
        organization:"",
        country:"",
        email:""
    });

    //sends back updated author info to frontend for checking
    useEffect(() => {
        updateInfo();
    }, [state]);

    //handles input change for all the input boxes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

    //calls parent info update state 
    const updateInfo = (e) => {
        props.getData(state);
    };

    return ( 
        <div className="w-11/12 mx-auto">
        <div className = "bg-pijet-blue mx-auto rounded max-w-lg h-10" >
            <p className = "text-white text-center pt-2" > Author { props.authorCount } </p>
        </div>
        <form className = "w-full max-w-lg mx-auto my-8">
            <div className = "flex flex-wrap -mx-3 mb-6" >
                <div className = "w-full md:w-1/3 px-3 mb-6 md:mb-0" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-first-name" > First Name </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id = "grid-first-name" type = "text" name="fname" value={state.fname} onChange={handleInputChange} placeholder = "James" />
                </div>
                <div className = "w-full md:w-1/3 px-3" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-last-name" > Last Name </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id = "grid-last-name" type = "text" name="lname" value={state.lname} onChange={handleInputChange} placeholder = "Smith" />
                </div>  
                <div className = "w-full md:w-1/3 px-3" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-last-name" > Organisation </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id = "grid-last-name" type = "text" name="organization" value={state.organization} onChange={handleInputChange} placeholder = "PICT" />
                </div> 
                <div className = "w-full md:w-1/2 px-3" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-last-name" > Country </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id = "grid-last-name" type = "text" name="country" value={state.country} onChange={handleInputChange} placeholder = "India" />
                </div> 
                <div className = "w-full md:w-1/2 px-3" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-password" > E-mail </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id = "grid-password" type = "email" name="email" value={state.email} onChange={handleInputChange} placeholder = "email" />
                </div> 
            </div> 
            <div className = "flex flex-wrap -mx-3 mb-6" >
                
            </div>
            </form>

        </div>
    );
}
    
export default Author;
