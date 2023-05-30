import { useState } from "react";
function Fetching() {

    const [Respo ,setRespo] = useState("");




fetch("https://jsonplaceholder.typicode.com/posts").then(((res) => res.json())).then((data) =>{
    // console.log(data);
    console.log(data[0].title);

    setRespo(data[0].title);



})
    return (
      <div className="Fetching">
  <button >Fetching</button>
  <h1>{Respo}</h1>
      </div>
    );
  }

  export default Fetching;