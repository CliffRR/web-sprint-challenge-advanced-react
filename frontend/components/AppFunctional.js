import React, { useState, } from 'react'
import axios from 'axios'

const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const xCoordinate = 2
const yCoordinate = 2

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
  x: xCoordinate,
  y: yCoordinate
}


export default function AppFunctional(props) {
  const [state, setState] = useState(initialState)


  const reset = () => {
    setState({...state,
    index: 4,
    message: "",
    steps: 0,
    email: "",
    x: 2,
    y: 2
    })
  }

  const moveLeft = () => {
    if (state.index === 4){
      setState({...state,
        steps: state.steps + 1,
        index: 3,
        x: 1,
        y: 2
      })
    }

    if(state.index === 1){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 0,
        x: 1,
        y: 1
      })
    }

    if(state.index === 7){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 6,
        x: 1,
        y: 3
      })
    }

    if(state.index === 8){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 7,
        x: 2,
        y: 3
      })
    }

    if(state.index === 5){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 4,
        x: 2,
        y: 2
      })
    }

    if(state.index === 2){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 1,
        x: 2,
        y: 1
      })
    }

    if(state.index === 0){
      setState({
        ...state, 
        message: "You can't go left"
      })
    }

    if(state.index === 3){
      setState({
        ...state, 
        message: "You can't go left"
      })
    }

    if(state.index === 6){
      setState({
        ...state, 
        message: "You can't go left"
      })
    }
  }

  const moveRight = () => {
    if (state.index === 4){
      setState({...state,
        steps: state.steps + 1,
        index: 5,
        x: 3,
        y: 2
      })
    }

    if(state.index === 1){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 2,
        x: 3,
        y: 1
      })
    }

    if(state.index === 7){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 8,
        x: 3,
        y: 3
      })
    }

    if(state.index === 8){
      setState({
        ...state, 
        message: "You can't go right"
      })
    }

    if(state.index === 5){
      setState({
        ...state, 
        message: "You can't go right"
      })
    }

    if(state.index === 2){
      setState({
        ...state, 
        message: "You can't go right"
      })
    }

    if(state.index === 0){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 1,
        x: 2,
        y: 1
      })
    }

    if(state.index === 3){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 4,
        x: 2,
        y: 2
      })
    }

    if(state.index === 6){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 7,
        x: 2,
        y: 3
      })
    }
  }

  const moveUp = () => {
    if (state.index === 4){
      setState({...state,
        steps: state.steps + 1,
        index: 1,
        x: 2,
        y: 1
      })
    }

    if(state.index === 1){
      setState({
        ...state, 
        message: "You can't go up"
      })
    }

    if(state.index === 7){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 4,
        x: 2,
        y: 2
      })
    }

    if(state.index === 8){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 5,
        x: 3,
        y: 2
      })
    }

    if(state.index === 5){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 2,
        x: 3,
        y: 1
      })
    }

    if(state.index === 2){
      setState({
        ...state, 
        message: "You can't go up"
      })
    }

    if(state.index === 0){
      setState({
        ...state, 
        message: "You can't go up"
      })
    }

    if(state.index === 3){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 0,
        x: 1,
        y: 1
      })
    }

    if(state.index === 6){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 3,
        x: 1,
        y: 2
      })
    }
  }

  const moveDown = () => {
    if (state.index === 4){
      setState({...state,
        steps: state.steps + 1,
        index: 7,
        x: 2,
        y: 3
      })
    }

    if(state.index === 1){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 4,
        x: 2,
        y: 2
      })
    }

    if(state.index === 7){
      setState({
        ...state, 
        message: "You can't go down"
      })
    }

    if(state.index === 8){
      setState({
        ...state, 
        message: "You can't go down"
      })
    }

    if(state.index === 5){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 8,
        x: 3,
        y: 3
      })
    }

    if(state.index === 2){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 5,
        x: 3,
        y: 2
      })
    }

    if(state.index === 0){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 3,
        x: 1,
        y: 2
      })
    }

    if(state.index === 3){
      setState({
        ...state, 
        steps: state.steps + 1,
        index: 6,
        x: 1,
        y: 3
      })
    }

    if(state.index === 6){
      setState({
        ...state, 
        message: "You can't go down"
      })
    }
  }

  const onChange = (e) => {
    const {name, value} = e.target
    setState({...state, [name]: value})
  }


  const onSubmit = (e) => {
    e.preventDefault()
    const payloadToSend = {x: state.x, y: state.y, steps: state.steps, email: state.email }
    axios.post("http://localhost:9000/api/result", payloadToSend)
      .then(res => {
        setState({ ...state, message: res.data.message, email: "" })
      })
      .catch(error => {
        if(error.response.status === 403){
          setState({ ...state, x: 2, y: 2, steps: 0, message: error.response.data.message, email: "" })
        }
        if(error.response.status === 422 && state.message === ""){
          setState({ ...state, x: 2, y: 2, steps: 0, message: "Ouch: email is required", email: "" })
        }
        if(error.response.status === 422){
          setState({ ...state, x: 2, y: 2, steps: 0, message: error.response.data.message, email: "" })
        }
      })
    }

  console.log(state)
  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${state.x}, ${state.y})`}</h3>
        <h3 id="steps">{state.steps === 1 ? `You moved ${state.steps} time` : `You moved ${state.steps} times`}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === state.index ? ' active' : ''}`}>
              {idx === state.index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{ state.message }</h3>
      </div>
      <div id="keypad">
        <button onClick = {() => moveLeft()}id="left">LEFT</button>
        <button onClick = {() => moveUp()} id="up">UP</button>
        <button onClick = {() => moveRight()} id="right">RIGHT</button>
        <button onClick = {() => moveDown()} id="down">DOWN</button>
        <button onClick = {() => reset()} id="reset">reset</button>
      </div>
      <form onSubmit = {onSubmit}>
        <input 
          id = "email" 
          onChange = {onChange} 
          type = "email" 
          name = "email" 
          value = {state.email} 
          placeholder = "type email"
        />
        <input id="submit" type="submit" formNoValidate = "formnovalidate"></input>
        {/* <input id="submit" type="submit"></input> */}
      </form>
    </div>
  )
}
