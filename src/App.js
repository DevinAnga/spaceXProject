import React from 'react';
import './App.css';
import LaunchListHooks from "./components/launchListHook.jsx"

function App() {
  return (
    <div className="App">
      <div className="Title">
        SpaceX Launches
      </div>

      <div className="SelectBox">
        <p className="Label_Checkbox_Pair">
          <input type="checkbox" id="with Reddit" name="with Reddit" value="with Reddit"></input>
          <label for="with Reddit">With Reddit</label>
        </p>
        <p className="Label_Checkbox_Pair">
          <input type="checkbox" id="reused" name="reused" value="reused"></input>
          <label for="reused">Reused</label>
        </p>
        <p className="Label_Checkbox_Pair">
          <input type="checkbox" id="landSuccess" name="landSuccess" value="landSuccess"></input>
          <label for="landSuccess">Land Success</label>
        </p>
      </div>
      {<LaunchListHooks />}
    </div>
    
  );
}

export default App;
