import { click } from "@testing-library/user-event/dist/click"
import { useState } from "react"

const Button=(props)=>{

  return(
    <>
    <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}
const StatisticLine=(props)=>{
  return(
   
    <tr>
    <td>{props.text} </td>
    <td>{props.value} </td>
    <td>{props.unit}</td>
    </tr>
   
  )
}
const Statistics=(props)=>{
  if(props.total===0 ){
  return(
    <p>No Feedback Has Been Given Yet</p>
  )
  }
 

  else
return(
  <>
  <table> 
  <tbody>
  <StatisticLine text={'good'} value={props.good}></StatisticLine>
  
  <StatisticLine text={'neutral'} value={props.neutral}></StatisticLine>
  <StatisticLine text={'bad'} value={props.bad}></StatisticLine>
  <StatisticLine text={'total'} value={props.total}></StatisticLine>
  <StatisticLine text={'average'} value={props.average}></StatisticLine>
  <StatisticLine text={'positive'} value={props.positive} unit={'%'}></StatisticLine>
  </tbody>
  </table>
  </>
 
  
)

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal]=useState(0)
  const [average,setAverage]=useState(0)
  const [positive,setPositive]=useState(0)

  const handleGood=()=>{
    // set good
    const newGood= good+1;
    setGood(newGood);
    // set total
    const newTotal=newGood + bad + neutral
    setTotal(newTotal)
    // set average
    const newAverage= newGood   / newTotal
    setAverage(newAverage)
    //set positive percentage
    const newPositive= (newGood / newTotal) * 100
    setPositive(newPositive)
  }

  const handleBad=()=>{
    // set bad
    const newBad= bad + 1;
    setBad(newBad);
    // set total
    const newTotal=newBad + good + neutral
    setTotal(newTotal)
    // set average
    const newAverage=   (good + (newBad*-1)) / newTotal
    setAverage(newAverage)
    // set positive percentage
    const newPositive= (good / newTotal) * 100
    setPositive(newPositive)
  }

  const handleNeutral=()=>{
    // set neutral
    const newNeutral= neutral+1;
    setNeutral(newNeutral);
    //  set total
    const newTotal=newNeutral + good + bad
    setTotal(newTotal)
    // set average
    const newAverage= good / newTotal
    setAverage(newAverage)
    // set positive
    const newPositive= (good / newTotal) * 100
    setPositive(newPositive)
  }
  return (
    <div>
      <h1>Give Feedback</h1>

      <Button handleClick={handleGood} text={'good'}></Button>
      <Button handleClick={handleNeutral} text={'neutral'}></Button>
      <Button handleClick={handleBad} text={'bad'}></Button>
      <h1>Statistics</h1>
   <Statistics good={good} bad={bad} total={total} average={average} positive={positive}
   neutral={neutral}
   textGood={'good'} textBad={'bad'} textNeutral={'neutral'} textAverage={'average'}
   textTotal={'total'} textPositive={'positive'}></Statistics>
    </div>
  )
}

export default App
