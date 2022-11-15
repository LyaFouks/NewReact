import Header from "./components/Layaout/Header";
import React from "react";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
