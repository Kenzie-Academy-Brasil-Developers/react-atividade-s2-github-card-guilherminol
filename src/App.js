import "./App.css";
import PageSearch from "./components/PageSearch";
import APIRender from "./components/APIRender";
import { useState } from "react";

function App() {
  const [apiSearch, setApiSearch] = useState({});
  const [userInput, setUserInput] = useState("");
  const [searchedRepo, setSearchedRepo] = useState("");
  const getAPIdata = (address) => {
    console.log(address);
    fetch(address)
      .then((response) => response.json())
      .then((response) => setApiSearch(response))
      .catch((error) => alert(error));
  };

  return (
    <>
      <PageSearch
        setSearchedRepo={setSearchedRepo}
        searchedRepo={searchedRepo}
        setUserInput={setUserInput}
        userInput={userInput}
        getAPIdata={getAPIdata}
      />
      {apiSearch && <APIRender apiSearch={apiSearch} />}
    </>
  );
}

export default App;
