import { useState, useEffect } from "react";

//conditional rendering
function App() {
 let [counterVisible, setCounterVisible] = useState(true);

 useEffect(function() {
  setInterval(function() {
    setCounterVisible(c => !c)
  }, 5000);
 }, [])

  return <div>
  hi
    {counterVisible && <Counter></Counter>}
    hello
  </div>
}
// mounting, re-rendering, unmounting
function Counter() {
  const [count, setCount] = useState(0);
  console.log("counter");

  // clearInterval
  useEffect(function () {
    console.log("hi there");
    let clock = setInterval(function() {
      console.log("from inside interval");
       setCount(c => c + 1);
    }, 1000);

    return function() {
      clearInterval(clock)
    }

  }, [])  // dependency array, cleanup, fetch inside useEffect

  function increaseCount() {
    setCount(count + 1);
  }
  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
  </div>

}

export default App
