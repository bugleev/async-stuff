import * as React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import DisplayRemoteData from "./DisplayRemoteData";

const App = () => {
  const [id, setId] = useState("1"); 
  return (
    <div>
      <div>
        id:
        <input value={id} onChange={e => setId(e.target.value)} />
        {id && <DisplayRemoteData id={id} />}
      </div>
      <hr />    
    </div>
  );
};

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
