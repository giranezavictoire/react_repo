import { useState } from "react";
import { useEffect } from "react";
function Fetching1(){
   
    const [blogs, setblogs] = useState("");

    useEffect(() =>{

        fetch("https://puce-helpful-xerus.cyclic.app/blogs").then(((res) => res.json())).then((data) => {

         console.log(data);
         setblogs(data);
    })




})
return(
    <div className="fetchpage">
        {/* <button>my fetching page</button> */}
        <div>{blogs}</div>
    </div>
);

}
export default Fetching1;