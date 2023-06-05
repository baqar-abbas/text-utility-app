import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Utility - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Utility - Light Mode";
    }
  }
  return (
    <>
  
    <Navbar title="Text Utility" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-4">
    <Routes>
        <Route exact path="/" element={<TextForm heading = "Enter the Text to Analyze" mode={mode} showAlert={showAlert} />  } />
        <Route exact path="/about" element={<About mode={mode}/>} />
      </Routes>
    {/* <TextForm heading = "Enter the Text to Analyze" mode={mode} showAlert={showAlert} /> */}
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;
