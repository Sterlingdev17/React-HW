import React from 'react';
import Employee from "./components/employee"

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: false

    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=200&nat=us')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results)
        this.setState({
          items: response.results,
          loading: true
        })
      })
  }


  render() {
    var { items, loading } = this.state;

    if (!loading) {
      return <div>Loading....</div>

    } else {

      return (
        <div>
          <Employee items={items} />
          {/* {items.map( item => (
          <img src={item.picture.large} alt={item.name.first} />
        ))} */}

        </div>


      );
    }


  }
}
export default App;
