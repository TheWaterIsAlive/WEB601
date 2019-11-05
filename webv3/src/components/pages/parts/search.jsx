import React from 'react';

import { Container} from 'react-bootstrap';

export class Search extends React.Component {
  render() {


    return (
      <Container className="contentSpacing">
        <center>
          <select className="padding">
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="Price">Price</option>

          </select>
          <input type="text" placeholder="Search.." className="padding" />
        </center>
      </Container>);
  }

}
export default Search;

