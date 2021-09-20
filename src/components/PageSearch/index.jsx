import { useEffect } from "react";
const PageSearch = ({
  setSearchedRepo,
  setUserInput,
  userInput,
  getAPIdata,
  searchedRepo,
}) => {
  const handleSearch = (input) => {
    setSearchedRepo(`https://api.github.com/repos/${input}`);
  };
  useEffect(() => {
    if (searchedRepo) {
      getAPIdata(searchedRepo);
    }
  }, [searchedRepo]);
  return (
    <>
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Search repository"
        value={userInput}
      />
      <button onClick={() => handleSearch(userInput)}>Search</button>
    </>
  );
};
export default PageSearch;
