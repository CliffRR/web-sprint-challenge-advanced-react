import React from 'react'
import axios from 'axios'


const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 
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

export default class AppClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.submits = []
  }

  reset = () => {
    this.setState({...this.state,
    index: 4,
    message: "",
    steps: 0,
    email: "",
    x: 2,
    y: 2
    })
  }

  moveLeft = () => {
    if (this.state.index === 4){
      this.setState({...this.state,
        steps: this.state.steps + 1,
        index: 3,
        x: 1,
        y: 2
      })
    }

    if(this.state.index === 1){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 0,
        x: 1,
        y: 1
      })
    }

    if(this.state.index === 7){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 6,
        x: 1,
        y: 3
      })
    }

    if(this.state.index === 8){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 7,
        x: 2,
        y: 3
      })
    }

    if(this.state.index === 5){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 4,
        x: 2,
        y: 2
      })
    }

    if(this.state.index === 2){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 1,
        x: 2,
        y: 1
      })
    }

    if(this.state.index === 0){
      this.setState({
        ...this.state, 
        message: "You can't go left"
      })
    }

    if(this.state.index === 3){
      this.setState({
        ...this.state, 
        message: "You can't go left"
      })
    }

    if(this.state.index === 6){
      this.setState({
        ...this.state, 
        message: "You can't go left"
      })
    }
  }

  moveRight = () => {
    if (this.state.index === 4){
      this.setState({...this.state,
        steps: this.state.steps + 1,
        index: 5,
        x: 3,
        y: 2
      })
    }

    if(this.state.index === 1){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 2,
        x: 3,
        y: 1
      })
    }

    if(this.state.index === 7){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 8,
        x: 3,
        y: 3
      })
    }

    if(this.state.index === 8){
      this.setState({
        ...this.state, 
        message: "You can't go right"
      })
    }

    if(this.state.index === 5){
      this.setState({
        ...this.state, 
        message: "You can't go right"
      })
    }

    if(this.state.index === 2){
      this.setState({
        ...this.state, 
        message: "You can't go right"
      })
    }

    if(this.state.index === 0){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 1,
        x: 2,
        y: 1
      })
    }

    if(this.state.index === 3){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 4,
        x: 2,
        y: 2
      })
    }

    if(this.state.index === 6){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 7,
        x: 2,
        y: 3
      })
    }
  }

  moveUp = () => {
    if (this.state.index === 4){
      this.setState({...this.state,
        steps: this.state.steps + 1,
        index: 1,
        x: 2,
        y: 1
      })
    }

    if(this.state.index === 1){
      this.setState({
        ...this.state, 
        message: "You can't go up"
      })
    }

    if(this.state.index === 7){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 4,
        x: 2,
        y: 2
      })
    }

    if(this.state.index === 8){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 5,
        x: 3,
        y: 2
      })
    }

    if(this.state.index === 5){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 2,
        x: 3,
        y: 1
      })
    }

    if(this.state.index === 2){
      this.setState({
        ...this.state, 
        message: "You can't go up"
      })
    }

    if(this.state.index === 0){
      this.setState({
        ...this.state, 
        message: "You can't go up"
      })
    }

    if(this.state.index === 3){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 0,
        x: 1,
        y: 1
      })
    }

    if(this.state.index === 6){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 3,
        x: 1,
        y: 2
      })
    }
  }

  moveDown = () => {
    if (this.state.index === 4){
      this.setState({...this.state,
        steps: this.state.steps + 1,
        index: 7,
        x: 2,
        y: 3
      })
    }

    if(this.state.index === 1){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 4,
        x: 2,
        y: 2
      })
    }

    if(this.state.index === 7){
      this.setState({
        ...this.state, 
        message: "You can't go down"
      })
    }

    if(this.state.index === 8){
      this.setState({
        ...this.state, 
        message: "You can't go down"
      })
    }

    if(this.state.index === 5){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 8,
        x: 3,
        y: 3
      })
    }

    if(this.state.index === 2){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 5,
        x: 3,
        y: 2
      })
    }

    if(this.state.index === 0){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 3,
        x: 1,
        y: 2
      })
    }

    if(this.state.index === 3){
      this.setState({
        ...this.state, 
        steps: this.state.steps + 1,
        index: 6,
        x: 1,
        y: 3
      })
    }

    if(this.state.index === 6){
      this.setState({
        ...this.state, 
        message: "You can't go down"
      })
    }
  }

  onChange = (e) => {
  const {name, value} = e.target
  this.setState({...this.state, [name]: value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    const payloadToSend = {x: this.state.x, y: this.state.y, steps: this.state.steps, email: this.state.email }
    axios.post("http://localhost:9000/api/result", payloadToSend)
      .then(res => {
        this.setState({ ...this.state, message: res.data.message, email: "" })
      })
      .catch(error => {
        if(error.response.status === 403){
          this.setState({ ...this.state, x: 2, y: 2, steps: 0, message: error.response.data.message, email: "" })
        }
        if(error.response.status === 422 && this.state.message === ""){
          this.setState({ ...this.state, x: 2, y: 2, steps: 0, message: "Ouch: email is required", email: "" })
        }
        if(error.response.status === 422){
          this.setState({ ...this.state, x: 2, y: 2, steps: 0, message: error.response.data.message, email: "" })
        }
      })
  }
  

  render() {
    const { className } = this.props;
    const { index, steps, email, x, y, message } = this.state;
  
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${x}, ${y})`}</h3>
          <h3 id="steps">{steps === 1 ? `You moved ${steps} time` : `You moved ${steps} times`}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
                {idx === index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{`${message}`}</h3>
        </div>
        <div id="keypad">
          <button onClick = {() => this.moveLeft()} id="left">LEFT</button>
          <button onClick = {() => this.moveUp()} id="up">UP</button>
          <button onClick = {() => this.moveRight()} id="right">RIGHT</button>
          <button onClick = {() => this.moveDown()} id="down">DOWN</button>
          <button onClick = {() => this.reset()} id="reset">reset</button>
        </div>
        <form onSubmit = {this.onSubmit}>
          <input 
            id = "email" 
            onChange = {this.onChange} 
            type = "email" 
            name = "email"
            value = {email} 
            placeholder = "type email">
          </input>
          <button id="submit" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
