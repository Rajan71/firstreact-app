import React from "react";
import './App.css';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar title={'FirstReactApp'} />
        {/* <div className='container my-3'> */}
        <Routes>

          <Route path="/" element={<TextForm />} />

        </Routes>

        {/* </div> */}
      </Router>
      <div className='back' style={{ width: '100%', height: '80px', backgroundColor: 'red', display: 'flex', flexDirection: 'column', }}>
        <button>hello</button>
        <button>hello</button>
      </div>
    </>
  );
}

export default App;
