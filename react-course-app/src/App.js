import Costs from "./components/Costs/Costs";

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
      <Costs costs={costs} />
    </div>
  );
}

export default App;
