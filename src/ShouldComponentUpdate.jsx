import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
constructor(){
    super();
    this.state = {
        count:0,
    };
}
// it will return boolen value, by default it will remain false
shouldComponentUpdate(nextporps, nextState){
    console.log("shouldComponentUpdate called!!", this.state.count);
    if(nextState.count < 5){
        return true
    }
return false;
}

  render() {
    return (
      <div className='App'>
        <h1>Lifecycle ShouldComponentUpdate</h1>
        <h2>Count: {this.state.count}</h2>
        {/* Example 1 */}
        <button onClick={()=> this.setState({count:this.state.count + 1})}>Update State</button>
      </div>
    )
  }
}
