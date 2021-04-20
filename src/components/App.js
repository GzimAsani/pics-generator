import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import './searchBar.css'

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
      
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