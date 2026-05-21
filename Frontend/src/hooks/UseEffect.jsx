import React from 'react'

const UseEffect = () => {
    const [count, setCount] = React.useState(0);
    const[like,countLike]=React.useState(0);

    useEffect(() => {
        console.log("compnonent rendered");
}[count,like])
const handleIncrement = () => {
    setCount(count + 1);
}
const handleDecrement = () => {
    setlike(like+ 1);
}
  return (
    <div>UseEffect</div>
    <p>Count : {count}</p>
    <button onClick={handleIncrement}>Inc</button>
    <button onClick={handleDecrement}>Dec</button>
  ) 

}

export default UseEffect