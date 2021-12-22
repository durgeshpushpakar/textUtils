//  making text Utils 
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

// react router config
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  // with router
  // return(
  //     <>
  //       <Router>
  //         <Navbar mode={mode} toggleMode={toggleMode} />
  //         <Alert alert={alert}/>
  //         <div className="container my-3">
  //           <Routes>
  //             <Route path="/" 
  //                 element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
  //             <Route path="/about" element={<About />}/>
  //           </Routes>
  //         </div>
  //       </Router>
  //     </>
  // );

//  without router
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
   </>
  );
}

export default App;