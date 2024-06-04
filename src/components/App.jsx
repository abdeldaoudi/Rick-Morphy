import { useEffect, useState } from "react";
import { Card } from "./Card";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const getCharacters = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.error(error);
    }
  };

  const onPrevious = () => {
    getCharacters(info.prev);
  };
  const onNext = () => {
    getCharacters(info.next);
  };

  useEffect(() => {
    getCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty" />
      <div className="mt-5 container">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Card characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
