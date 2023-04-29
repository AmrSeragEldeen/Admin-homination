import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/home.js";
import End from "./component/end.js";
import Reject from "./component/reject";
import Approv from "./component/approv.js";
import Wait from "./component/wait.js"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./component/Data.js";
import "./App.css"





function App() {
  
  
  
  return (

    <div className="App">
    <Row className="justify-content-center"></Row>
    <Col sm="4"></Col>
    <div className="fs-1 text-center font pd-10"><h2 className="title_Admin">Admin Panel</h2></div>
    <BrowserRouter>
    
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/end" element={ <End />}/>     
          <Route path="/wait" element={ <Wait />}/> 
          <Route path="/data" element={ <Data />}/> 
          <Route path="/reject" element={ <Reject />}/> 
          <Route path="/approv" element={ <Approv />}/>
        
      
        </Routes>
      </BrowserRouter>

      <Col sm="8"></Col>
     


    










    </div>
  );
}

export default App;
