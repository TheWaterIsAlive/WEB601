import React from 'react';

export class Search extends React.Component {
  render() {
      
   
    return  (
    <div class= "padding properSpacing"><center>
     <select class="padding">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> 
    <input type="text" placeholder="Search.." class="padding" />
    </center></div> );
  }
  
  }
  export default Search;

