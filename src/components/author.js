const Author = ({ authorCount }) => {
    return ( 
        <div className="w-11/12 mx-auto">
        <div className = "bg-pijet-blue mx-auto rounded max-w-lg h-10" >
            <p className = "text-white text-center pt-2" > Author { authorCount } </p>
        </div>
        <form className = "w-full max-w-lg mx-auto my-8" >
            <div className = "flex flex-wrap -mx-3 mb-6" >
                <div className = "w-full md:w-1/3 px-3 mb-6 md:mb-0" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-first-name" > First Name </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id = "grid-first-name" type = "text" placeholder = "James" />
                    {/* <p className = "text-red-500 text-xs italic" > Please fill out this field. </p>  */}
                </div>
                <div className = "w-full md:w-1/3 px-3" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-last-name" > Last Name </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id = "grid-last-name" type = "text" placeholder = "Smith" />
                </div>  
                <div className = "w-full md:w-1/3 px-3" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-last-name" > Organisation </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id = "grid-last-name" type = "text" placeholder = "PICT" />
                </div> 
                <div className = "w-full md:w-1/2 px-3" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-last-name" > Country </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id = "grid-last-name" type = "text" placeholder = "India" />
                </div> 
                <div className = "w-full md:w-1/2 px-3" >
                    <label className = "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor = "grid-password" > E-mail </label> 
                    <input className = "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id = "grid-password" type = "email" placeholder = " email  " />
                </div> 
            </div> 
            <div className = "flex flex-wrap -mx-3 mb-6" >
                
            </div>
            </form>

        </div>
    );
}
    
export default Author;
