import "./App.css";
import { useState, useCallback } from "react";
import Button from "./components/UI/Button";
import ParagraphOutput from "./components/UI/Output/ParagraphOutput";

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);

  const [isToggleActivated, setIsToggleActivated] = useState(false);

  console.log("App component");

  const toogleParagraph = useCallback(() => {
    if (isToggleActivated) {
      setIsParagraphShown((prevIsParagraphShown) => !prevIsParagraphShown);
    }
  }, [isToggleActivated]);

  const activatedToggling = () => {
    setIsToggleActivated(true);
  };

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      <ParagraphOutput isShown={isParagraphShown} />
      <Button onClick={activatedToggling}>Activated toggle</Button>
      <Button onClick={toogleParagraph}>Show / Hide</Button>
    </div>
  );
}

export default App;
