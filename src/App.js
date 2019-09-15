import React, { Component, useState, useEffect } from 'react';  //use hooks

const App = () => {
  const [count, setCount] = useState(0);   //setCount is a function

  useEffect(() => {      //replace component lifecycle
    document.title = `Clicked ${count} times`;
  })

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>counter app</h2>
      <button onClick={increment}>
        Clicked {count} times
      </button>
    </div>
  );

}

// class App extends Component {
//   state = {
//     count: 0
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`
//   }

//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`
//   }

//   render() {
//     return (
//       <div>
//         <h2>counter app</h2>
//         <button onClick={this.increment}>
//           Clicked {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }

export default App;
