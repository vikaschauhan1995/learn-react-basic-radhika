import { useMemo, useState } from "react";

const ExpensiveCalculation = ({ num }) => {
    // Simulating a huge computation (multiplication up to 100,000 times)
    const hugeCalculation = useMemo(() => {
      console.log("Performing huge calculation...");
      let result = 1;
      for (let i = 1; i <= 100000000000 ; i++) {
        result *= num || 1; // Avoid multiplying by 0
        result %= 1000000007; // Prevent overflow
        result *= 100;
      }
      return result;
    }, [num]); // Recalculates only when `num` changes
  
    return <p className="text-lg font-bold">Result: {hugeCalculation}</p>;
  }

const UserMemoComponent = () => {
    const [number, setNumber] = useState(2);
  const [theme, setTheme] = useState("light");
    return <div className={`p-6 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
    <h2 className="text-xl font-bold">useMemo Expensive Calculation</h2>
    <input
      type="number"
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value) || 1)}
      className="border p-2 mt-2 rounded-lg"
    />
    <ExpensiveCalculation num={number} />
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-gray-500 text-white px-4 py-2 mt-2 rounded-lg"
    >
      Toggle Theme
    </button>
  </div>
}

export default UserMemoComponent;