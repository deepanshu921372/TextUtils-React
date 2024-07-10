import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a1a1a';
      showAlert("Dark Mode has been enabled!!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!!", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Textform showAlert={showAlert} heading="Enter the text here to analyze below!!" mode={mode} /> */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces, Convert Text to Uppercase and Lowercase" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;