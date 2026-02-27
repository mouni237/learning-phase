import logo from './logo.svg';
import './App.css';
 import './Counter.css';
 import Dynamic from'./Dynamic'
// //import Login from './Login'
// //import New from'./New'
 import Counter from './Counter'
// import Web from './Web'
// import './Web.css'
// import Props from './Props'
// import './Props.css'

  function App(){
    const obj={
      name:"Mouni",
      roll:103,
      dept:"AI & DS"
    }
    const arr=[1,2,3,4,5];
    const arrobj=[{color:"orange"},{age:19}]
   return (
    <center>
     <div>
      
       <Dynamic/>
        
      </div>
</center>
   )
  }
export default App;
// function App() {
//   const name="Mounika"
//   const age=21
//   const city="Rasipuram"
//   return (
    
//     <div className="App">
//       <div className='divone'><h1 className="name"> Hi my name is {name} <br></br> My age is {age} <br></br> I am from {city}</h1></div>
// <div className='divtwo'>{
//   age>=18?<h1 className="success"> ELIGIBLE TO VOTE</h1>:<h1 className="error">NOT ELIGIBLE TO VOTE</h1>
// }</div>
// <div className='divthree'><p id="para">Iam Learning MERN Stack and become an Developer</p></div>

   
//     <div class="dashboard">
//         <div class="card tall">Income Graph</div>
//         <div class="card wide">Sales Report</div>
//         <div class="card">Stats</div>
//         <div class="card big">Main Visualization</div>
//         <div class="card">Bubble Chart</div>
//         <div class="card wide">Timeline</div>
//         <div class="card tall">Social Metrics</div>
//         <div class="card">Settings</div>
//       </div>
//        </div>
//   );
// }

