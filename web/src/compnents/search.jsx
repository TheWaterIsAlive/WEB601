import React from 'react';

export class Search extends React.Component {
  render() {
      
   
    return  (
    <div class="topnav">
     <select>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> 
    <input type="text" placeholder="Search.." /></div> );
  }
  
  }
  export default Search;

