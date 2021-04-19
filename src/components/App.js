import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import './searchBar.css'

class App extends React.Component {
  onSearchSubmit(term){
    
  }
  
  render(){
    return ( 
      <div className="ui container searchbar" >
        <SearchBar onMySubmit={this.onSearchSubmit}/> 
      </div>
    );
  }
}

export default App;