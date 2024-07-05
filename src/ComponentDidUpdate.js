import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {

  // Example 1
  constructor(){
    super();
    this.state = {
      name:"(s)code",
      count:0
    };
    console.log ("constructor called!");
  }

  //Example 1 
  componentDidUpdate(prevState, prevprops){

    // we can use two perameter prevstate and prevprops 
    console.log("componentDidUpdate called!", prevprops); 
  }
  render() {

    // Example 1
    console.log("Render called!");
    return (
      <div className='App'>
       <h1>LifeCycle ComponentDidUpdate Method!!</h1>
      <h2> count:{this.state.count}</h2>
       {/* <button onClick={()=> this.setState({name:"saikat ghosh"})}>Update sate</button>
        */}

        {/* example 2 */}
        <button onClick={()=> this.setState({count: this.state.count + 1})}>update State </button>
      </div>
    )
  }
}
