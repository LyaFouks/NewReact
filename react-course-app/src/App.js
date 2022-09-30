import CostItem from "./components/CostItem";

function App() {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Телевизор",
      amount: 400.99,
    },
    {
      date: new Date(2021, 5, 10),
      description: "Телефон",
      amount: 235.99,
    },
    {
      date: new Date(2021, 11, 8),
      description: "Пылесос",
      amount: 150.99,
    },
  ];

  return (
    <div>
      <h1>Hello React!!!</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default App;
