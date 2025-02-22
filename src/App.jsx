import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  const clickCountButton = () => {
    setCount(count + 1)
    // console.log("count1", count);
    setCount(count + 2)
    // console.log("count2", count);
    setCount(count + 3)
    // console.log("count3", count);
    setCount(count + 4)
    // console.log("count4", count);
  }
  useEffect(() => {
    console.log(count);
  });
  return (
    <>
      <div className="card">
        <button onClick={clickCountButton}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
