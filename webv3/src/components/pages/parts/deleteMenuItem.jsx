import React from 'react';

export class DeleteMenuItem extends React.Component {
  render() {



    return (


      <form className="menuSnapIn">
        Bussness Name:
            <input type="text" name="BussnessName" /><br />
       

        <button>Delete</button>
      </form>





    );

  }
}

export default DeleteMenuItem;