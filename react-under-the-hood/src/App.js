import "./App.css";
import { useState } from "react";
import Button from "./components/UI/Button";

function App() {
  const [isParagraphShown, setIsParagraphShown] = useState(false);

  console.log("Hello");

  const toogleParagraph = () => {
    setIsParagraphShown((prevIsParagraphShown) => !prevIsParagraphShown);
  };

  return (
    <div className="app">
      <h1>React под Капотом</h1>
      {isParagraphShown && <p>New paragraph</p>}
      <Button onClick={toogleParagraph}>Show / Hide</Button>
    </div>
  );
}

export default App;
