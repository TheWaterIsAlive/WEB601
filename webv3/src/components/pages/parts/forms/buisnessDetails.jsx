import React from "react";

export class BuisnessDetail extends React.Component {
  render() {
    return (
      // Place holder until a log in system is implemented
      <form className="menuSnapIn">
        Bussness Name:
        <input type="text" name="BussnessName" />
        <br />
        Address:
        <input type="text" name="BussnessAddress" />
        <button>Get</button>
        <button>Post</button>
        <button>Update</button>
        <button>Delete</button>
      </form>
    );
  }
}

export default BuisnessDetail;
