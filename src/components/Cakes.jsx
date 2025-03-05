import { useState } from "react"

const cakeList = [
  { id: 1, name: 'Venilla', price: 300 },
  { id: 2, name: 'Pineapple', price: 400 },
  { id: 3, name: 'Chocolava', price: 200 },
  { id: 4, name: 'Redvelvet', price: 560 }
]

const Cakes = () => {
  const [state, setState] = useState(cakeList);
  const list = state?.map((cake) => {
    return <li key={cake?.id}>{cake?.name}</li>
  });
  return <>
    <button>Change value</button>
    {
      list
    }
  </>;
}

export default Cakes;