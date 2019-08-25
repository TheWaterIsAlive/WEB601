import React from 'react';

export class Search extends React.Component {
  render() {
      
   
    return  (
    <div class= "padding properSpacing"><center>
     <select class="padding">
  <option value="name">Name</option>
  <option value="location">Location</option>
  <option value="Price">Price</option>

</select> 
    <input type="text" placeholder="Search.." class="padding" />
    </center></div> );
  }
  
  }
  export default Search;

