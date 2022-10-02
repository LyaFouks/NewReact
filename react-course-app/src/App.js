import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Телевизор",
      amount: 400.99,
    },
    {
      id: "c2",
      date: new Date(2021, 5, 10),
      description: "Телефон",
      amount: 235.99,
    },
    {
      id: "c3",
      date: new Date(2021, 11, 8),
      description: "Пылесос",
      amount: 150.99,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("App component");
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
