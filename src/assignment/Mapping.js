import { useState } from 'react';
let Mapping =({Students}) => {
    // let [students, setstudents]=usestate({name:kanyana, age:20}, {name:passfique, age:21});
    // const Student = ( ) => {
    //     console.log(Students);
    // }
    return(
        <div>
            {/* <h1>{students [1].name}</h1>
            <button onclick={students}>send</button> */}
        {Students.map ((item) => (
            <div>
               <h1> name: {item.name}</h1>
               <h1> age: {item.age}</h1>
            </div>
        
        ))}
    </div>
    )

}
export default Mapping;