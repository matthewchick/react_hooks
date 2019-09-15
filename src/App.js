import React, { Component, useState } from 'react';  //use hooks

const App = () => {
  const [count, setCount] = useState(0);   //setCount is a function

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
