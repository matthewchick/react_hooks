import React, { Component, useState, useEffect } from 'react';  //use hooks

const App = () => {
  //state: useState is a Hook that lets you add React state to function components.
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('react');  //pass 'react' to searchQuery
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react');

  //fetch news
  const fetchNews = () => {
    fetch(url)
      .then(result => result.json())
      .then(data => setNews(data.hits))
      .catch(error => console.log(error));
  }

  useEffect(() => {   //we don't need to have component lifecycle as componentDidMount()
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
  }

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  )
}
// const App = () => {
//   const [count, setCount] = useState(0);   //setCount is a function This is similar to this.state.count and this.setState in a class

//   useEffect(() => {      //replace component lifecycle
//     document.title = `Clicked ${count} times`;
//   })

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>counter app</h2>
//       <button onClick={increment}>
//         Clicked {count} times
//       </button>
//     </div>
//   );

// }

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
