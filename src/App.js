import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      {/* <Greet name = "Dhruv" heroName="Batman">
        <p>This is children props.</p>
      </Greet>
      <Greet name = "Sakshu" heroName="Wonder Woman">
        <button>Hey</button>
      </Greet>
      <Greet name = "Hrithik" heroName="Superman"/>
      <Welcome name = "Dhruv" heroName="Batman"/>
      <Welcome name = "Sakshu" heroName="Wonder Woman"/> */}
      <Message />
    </div>
  );
}

export default App;
