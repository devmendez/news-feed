import React, { Component } from 'react'
import ListItem from './ListItem'

class Listing extends Component {
  state = {
      values: [], 
      searchText: ''
  };

  handleChange = e => {
      this.setState({ searchText: e.target.value })
  };

    fetchListings = e => {
        e.preventDefault();
      fetch('http://hn.algolia.com/api/v1/search?query=' + this.state.searchText)
        .then(response => response.json())
        .then(data => {
            console.log(data)
          this.setState({ values: data.hits })
        });
    };
  
  
    render() {

      return (
        <div>
          <form  style={{ background: "orange", padding: "10px" }} onSubmit ={this.fetchListings}>
              <label >
                  Search:
                  <input    
                    type="text"
                    value={this.state.searchText}
                    onChange={this.handleChange}
                    />
              </label>
              <button type='submit'>Listing</button>
          </form>
          {this.state.values.map(listing => {
              return <ListItem item={listing}/>
            })
          }
        </div>
      );
    }
}


export default Listing