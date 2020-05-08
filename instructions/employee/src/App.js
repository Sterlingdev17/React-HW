import React from 'react';
import Employee from "./components/employee"
import Search from "./components/search"

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

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    var { items, loading } = this.state;

    if (!loading) {
      return <div>Loading....</div>

    } else {

      return (
        <div className="container">
          <div class="jumbotron jumbotron-fluid">
              <h1 class="display-4">Employee Management</h1>
          </div>
          <Search handleChange={this.handleChange} />
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
