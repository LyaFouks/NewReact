import "./App.css";
import { useState, useCallback } from "react";
import Button from "./components/UI/Button";
import ParagraphOutput from "./components/UI/Output/ParagraphOutput";

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);

  console.log("App component");

  const toogleParagraph = useCallback(() => {
    setIsParagraphShown((prevIsParagraphShown) => !prevIsParagraphShown);
  }, []);

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      <ParagraphOutput isShown={isParagraphShown} />
      <Button onClick={toogleParagraph}>Show / Hide</Button>
    </div>
  );
}

export default App;
