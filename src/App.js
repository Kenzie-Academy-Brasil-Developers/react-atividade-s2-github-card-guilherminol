import "./App.css";
import PageSearch from "./components/PageSearch";
import APIRender from "./components/APIRender";
import { useState, useEffect } from "react";
import { set } from "react-hook-form";

function App() {
  const [apiSearch, setApiSearch] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const getAPIdata = (address) => {
    fetch(address)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.message !== "Not Found") {
          setApiSearch([...apiSearch, response]);
          setIsValid(true);
        } else setIsValid(false);
      })
      .catch((error) => setIsValid(false));
  };

  return (
    <div className="App">
      <PageSearch getAPIdata={getAPIdata} isValid={isValid} />
      {apiSearch.length > 0 && <APIRender apiSearch={apiSearch} />}
    </div>
  );
}

export default App;
