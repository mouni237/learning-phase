 import React from 'react'
 import {useState} from 'react'
 import './Counter.css'
//hooks - useState for state management
// Suntax ==> const [state,setState]=useState(initialValue)
//const state=0
// const Counter=()=>{
//     const [value,setValue]=useState(1);

//     function logs(){
//         setValue(value + 1);
//     }
//     //logs();
//     return(
//         <div>
//           <h1>{value}</h1>
//           <button className='btn_Counter' onClick={logs}>click</button>
//         </div>
//     )
// }
// export default Counter
// const Counter=()=>{
//     const [str,setStr]=useState("Mounika");

//     function logs(){
//         setStr("Mouni");
//     }
//     //logs();
//     return(
//         <div>
//           <h1>{str}</h1>
//           <button className='btn_Counter' onClick={logs}>Update</button>
//         </div>
//     )
// }
// export default Counter
// const Counter=()=>{
//     const [str,setStr]=useState("Mounika");
//     const [value,setValue]=useState(2);

//     function logs(){
//         setStr("Mouni");
//     }
//     function changename(){
//         setValue(value *2);
//     }
//     //logs();
//     return(
//         <div>
//           <h1>HI {str}</h1>
//           <button className='btn_Counter' onClick={logs}>Update</button>
//           <h1> {value}</h1>
//           <button className='btn_Counter' onClick={changename}>Click</button>
//         </div>
        
          
        
//     )
// }
// export default Counter
// const Counter=()=>{
//     const [str,setStr]= useState(1);
//     const [furniture,setfurniture]= useState({
//         available:true,
//         name:"chair",
//         screw:100,
//         wheels:50,
//         seat:50,
//         price:1000

//     })
//     console.log(furniture)
//     function logs(){
//         setfurniture({
//             ...furniture,
//             wheels:100
//         })
//     }
//         console.log(furniture);
    
//     return(
//         <div className='counter'>
//           <h1>Name of furniture:{furniture,name}</h1>
//           <h1>Name of furniture:chair</h1>
//           <h1>Name of furniture:chair</h1>
//           <h1>Name of furniture:chair</h1>
//           <h1>Name of furniture:chair</h1>
//           <h1>Name of furniture:chair</h1>
//           <button className='btn-counter'  onClick={logs}> Click</button>
//         </div>
//     )
// }
// export default Counter
const Counter=()=>{
    const [count,setCount]=useState(true);
    function change(){
        setCount(!count)
        console.log(count)
    }
    return(
            <center>
        
        <div className="counter">
 <h1>{count ? "true":"false"}</h1>
 <div className={count? "box-white":"box-dark"}>
d
 </div>
 <button onClick={change} className='btn-Counter'>dark/white</button>
  
        </div>
        </center>
    )
}
export default Counter