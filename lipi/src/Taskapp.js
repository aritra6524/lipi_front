//import logo from './logo.svg';
import './Taskapp.css';
import Canvas from './Canvas';
import Image from './images';

function Taskapp() {
 
  return (
    <>
    <div className="App" style={{background:'black'}}>
      <div className="Navbar" style={{background:'yellow'}}>
        "hello navbar"
        <Image></Image>
        </div>
      <div className="Body">
        <div className="Bio">
        </div>
        <div className="Board" style={{background:'white'}}>  
          <Canvas 
             width={520} 
             height={520}
          />
          <div className="Buttons">
             <button>Done</button>
             <button>Submit</button>
          </div>
        </div>  
        <div className="Help" style={{background:'green'}}>

        </div>
      </div>
    </div>
    </>
  );
}
/*<header className="App-header">
<div>{"10+50"}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
*/        
export default Taskapp;
