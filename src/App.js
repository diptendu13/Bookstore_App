import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import BookGallery from "./Components/BookGallery";
import Banner from "./Components/Banner";

const App = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [displayItem, setDisplayItem] = useState(false);
  const [targetRef, setTargetRef] = useState({});

  return (
    <div>
      <Navbar setResults={setResults} setError={setError} setSelectedItem={setSelectedItem} setDisplayItem={setDisplayItem} />
      <Banner selectedItem={selectedItem} displayItem={displayItem} setTargetRef={setTargetRef} />
      <BookGallery results={results} setSelectedItem={setSelectedItem} setDisplayItem={setDisplayItem} targetRef={targetRef} />
    </div>
  )
}


export default App;