import React from 'react';
import Employee from "./components/employee"
import Search from "./components/search"

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: [],
      filteredItems: [],
      loading: false

    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=200&nat=us')
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results)
        this.setState({
          filteredItems: response.results,
          items: response.results,
          loading: true
        })
      })
  }
  handleChange = (e) => {
    const query = e.target.value.toLowerCase();

    console.log(query);
    const filteritems = this.state.items.filter(item => {
      return item.name.first.toLowerCase().indexOf(query) !== -1;


    })

    this.setState({filteredItems: filteritems});

  }



  render() {
    var { filteredItems, loading } = this.state;

    // items = this.props.items.filter((
    //   item => {
    //     return item.name.indexOf(this.state.search) !== -1;
    //   }
    // ));

    if (!loading) {
      return <div>Loading....</div>

    } else {

      return (
        <div className="container">
          

          <Search handleChange={this.handleChange} />
          <Employee items={filteredItems} />
          {/* {items.map( item => (
          <img src={item.picture.large} alt={item.name.first} />
        ))} */}

        </div>


      );
    }


  }
}
export default App;
