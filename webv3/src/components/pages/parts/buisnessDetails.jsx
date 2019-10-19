import React from 'react';

export class BuisnessDetail extends React.Component {
  render() {

  

    return(
      
        
           <form className="menuSnapIn">
            Bussness Name:
            <input type="text" name="BussnessName" /><br />
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