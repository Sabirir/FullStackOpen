
const Header=(props)=>{
  return(
    <>
    <p>This course is : {props.course}</p>
    </>
  )
}
const Part=(props)=>{
  
  return(
    <> 
    <p>{props.title} {props.exercises}</p>
    </>
  )
}
const Content=()=>{
  
  const course={
    name:'Half Stack application development',
    parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]}

  return(
    <>
   <Part title={course.parts[0].name} exercises={course.parts[0].exercises}/>
   <Part title={course.parts[1].name} exercises={course.parts[1].exercises}/>
   <Part title={course.parts[2].name} exercises={course.parts[2].exercises}/>
    </>
   
  )
}
const Total=(props)=>{
  let tpart=props.course.parts.reduce(function(perviousValue,currentValue){
    return perviousValue + currentValue.exercises
  },0)
  console.log(tpart)
//  console.log("this is parts :"+parts[0].exercises)
  return(
    <>
    <p>Total number of exercises : {tpart} </p>
    </>
  )
}

const App = () => {
  const course = {
    name:'Half Stack application development',
    parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]}

  return (
    <div>
      <h1><Header course={course.name}/></h1>
    <Content course/>
     <Total course={course}/> 
    </div>
  )
}

