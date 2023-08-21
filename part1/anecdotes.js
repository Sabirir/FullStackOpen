import { click } from "@testing-library/user-event/dist/click"
import { useState } from "react"

const Button=(props)=>{
return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
}
const Votes=(props)=>{
  if(props.vote.length!==0){
    return(
      <>
      <h1>Anecdotes with most votes</h1>
      <p>{props.anecdotes} <br/>  {props.max} votes</p>
      </>
    )
  }

}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const n=new Array(8).fill(0)
  const [vote,setVote]=useState(n)
  const [max,setMax]=useState(0)
  const[index,setIndex]=useState(0);
  // console.log('vote array :',vote)
  // console.log('setMax :',max);
   const generateAnecdote=()=>{
    
    const newSelected=Math.floor(Math.random()*8)
    setSelected(newSelected)
    
    
   }
   const handleVote=()=>{
    const newVote=[...vote]
    newVote[selected]+=1;
   setVote(newVote);
   // max votes
   const maxVote=Math.max(...vote)
   setMax(maxVote)
   // retrieve the index of the max votes
   
   const maxIndex=newVote.indexOf(maxVote)
   setIndex(maxIndex)
   console.log('max anecdote: ',maxIndex)
   }
  const [selected, setSelected] = useState(0)

  return (
    
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p><p>Has {vote[selected]} votes</p>
      <Button handleClick={generateAnecdote} text={'next anecdote'}></Button>
      <Button handleClick={handleVote} text={'vote'}></Button>
      <Votes vote={vote} anecdotes={anecdotes[index]} max={max}></Votes>
      {/* <h1>Anecdotes with most votes :{anecdotes[index]} with {max} votes</h1> */}
    </div>
  )
}

export default App