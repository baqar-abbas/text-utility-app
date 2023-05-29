import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="Text Utility" aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-4">
    <TextForm heading = "Enter the Text to Analyze" mode={mode} showAlert={showAlert} />
    {/* <About /> */}
    </div>
    </>
  );
}

export default App;
