import React, { Component, useState } from 'react'


export default class ComponentDidMount extends Component {
    constructor(){
        super();
        this.state = {
            count:0,
        }
        console.log("constrrctor called");
    }
   // Example2
   incrementCount = () =>{
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
   }

    //Example 1
    componentDidMount(){
        console.log("Componet Did Mount!!");
    }
  render() {
    console.log("Render!!")
    return (
      <div className='example'>
        <h1>LifeCycle ComponentDidMount Method</h1>

    {/* Example 2 */}
    <h2>Count:{this.state.count}</h2>
    <button className='btn' onClick={this.incrementCount}></button>

      </div>

      // in console 1st constructor will run , 2nd  render will run and 3rd componetdid mount will run 
    )
  }
}
