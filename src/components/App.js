import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import './searchBar.css'

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID f8ZsUWqeNzDMwnnvnT9khgrRV8OnokgAmJ671_mg3iA' 
      }
    })
    this.setState({ images: response.data.results })
  }
  
  render(){
    return ( 
      <div className="ui container searchbar" >
        <SearchBar onMySubmit={this.onSearchSubmit}/>
        Found: {( this.state.images.length )} Images 
      </div>
    );
  }
}

export default App;