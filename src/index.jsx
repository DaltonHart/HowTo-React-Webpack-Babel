import React from 'react';
// import reactDOM from "react-dom"; Version 17~
import { createRoot } from 'react-dom/client'; // version 18^
import hello from './images/helloworld.gif';
import './index.scss';

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <img src={hello} alt="hello world animated" />
    </div>
  );
}

const root = createRoot(document.getElementById('root')); // version 18^
// reactDOM.render(<App />, document.getElementById("root")); Version 17~
root.render(<App />); // Version 18^
