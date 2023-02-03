// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {isCalculate: 0}

  onClickBtn = () => {
    this.setState({isCalculate: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {isCalculate} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="title">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.onClickBtn}>
            Generate
          </button>
          <p className="number">{isCalculate}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
