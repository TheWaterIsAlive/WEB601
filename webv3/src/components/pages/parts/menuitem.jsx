import React from 'react';



export class Menuitem extends React.Component {

  constructor(props) {
		super(props);
		   this.state = ({
		      isFetching: false,
              items: [],
		   })
	}
   
    GetMenuItem() {
        fetch('http://localhost:4200/api/menuItem/')
		.then(res => res.json())
		.then(data => {
			if(data.cod === '404') {
				this.setState({
					isFetching: false,
				})
			} else {
                this.setState({
                isFetching: true,
                items: data, 
            });
            }
		})
		.catch(err => {
		   console.log(err);
        })	
    }

    componentDidMount() {
        this.GetMenuItem();
  }
  

    render() {
        
             return ( 
            
                <table className="menuTable menuItem">
                  <tr>
                    <th>Menu ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Cost</th>


                  </tr>
              {this.state.items.map((menuItem) => (
               
                   <tr  key={menuItem.itemID}>
                    
                  
                    <td>{menuItem.menuID}</td>
                    <td>{menuItem.itemName}</td>
              
                    <td>{menuItem.itemDescription}</td>
                    <td>{menuItem.itemCost}</td>
                   
                   
                    </tr>
            
              ))}
              </table>
          
);
          
        
        
      }
}

export default Menuitem;