import { useRef , useEffect} from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  const clearInput = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type something" />
      <button onClick={clearInput}>Clear</button>
    </div>
  );
}

export default App;