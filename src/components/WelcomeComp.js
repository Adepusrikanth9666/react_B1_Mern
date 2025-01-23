import React, { Component } from "react";

// function Welcome() {
// using useState we r managong the state
// const [count , setCount ] = useState(0)
// const [name,setName] = useState("")
//   return (
// <>
// <div>Hello Welcome to Class based components</div>)
// {count}
// {name}
// </>
//
// }

// export default Welcome;

// Life cycle methods
// we cannot use hooks?
// how to to manage teh state/.?

// componentDidMount: Executes after the component is rendered.
// componentDidUpdate: Executes after state or props updates.
// componentWillUnmount: Executes before the component is removed from the DOM.

// componentDidMount(){
//     // code what u whant to do after render
// }
// componentDidUpdate(){
//     // After teh update this method is gng to call
// }

// componentWillUnmount(){
//     // /Unmount before comp is removed from teh dom
// }

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Jhon",
    };
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  getDerivedStateFromPros() {
    console.log("getDerivedStateFromPros");
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return this.state.count;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  //   useEffect(()=>{})

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //   useEffect(()=>{},[])

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //   useEffect(()=>{
  // your code
  // return ()=>{
  //unmount phase
  // }
  // },[])

  increment = () => {
    // setCount(count +1)
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div>Hello Welcome to the Class based componets</div>
        <h1>{this.state.count}</h1>
        <h3>{this.state.name}</h3>
        <h4>{this.props.name}</h4>
        <h4>{this.props.email}</h4>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

export default Welcome;
