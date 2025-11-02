import { FruitItem } from "./components/FruitItem"

function App() {
  const fruits = [
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 2,
      name: "Banana",
    },
    {
      id: 3,
      name: "Cherry",
    },
  ]
  return (
    <ul>
      {fruits.map((fruit) => (
        <FruitItem key={fruit.id} id={fruit.id} name={fruit.name} />
      ))}
    </ul>
  )
}

export default App