const Hello = (props) =>{
  return (
    <div>
      <p> I hate you {props.name} </p>
    </div>
  )
}

const App = () => {
  const age = 8
  return (
    <div>
      <Hello name={age}/>
    </div>
  )
}

export default App