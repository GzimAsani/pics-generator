import axios from 'axios';

export default axios.create({
  
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f8ZsUWqeNzDMwnnvnT9khgrRV8OnokgAmJ671_mg3iA' 
  }
});