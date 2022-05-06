import {useState, useEffect} from 'react';
import './App.css';
import Files from './components/Files';
import filesData from "./files.json";

function App() {  
  
  useEffect(() => { 
    filesData.map(file => {
      return file['selected'] = false;
    });        
  });

  return (
    <div className="App">
      <Files filesData={filesData}></Files>
    </div>
  );
}

export default App;
