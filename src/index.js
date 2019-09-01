import * as React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import DisplayRemoteData from "./DisplayRemoteData";
import { useFetch } from "./lib/use-async-task-fetch";

const TestComponent = () => {
  const { pending, result } = useFetch("https://yesno.wtf/api");
  const renderSpinner = "loading";
  const renderData = result ? result.answer : "no data";
  return pending ? renderSpinner : renderData;
};

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
      <TestComponent />
    </div>
  );
};

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
