import React from 'react';

export class Search extends React.Component {
  render() {


    return (
      <div className="padding properSpacing">
        <center>
          <select className="padding">
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="Price">Price</option>

          </select>
          <input type="text" placeholder="Search.." className="padding" />
        </center>
      </div>);
  }

}
export default Search;

