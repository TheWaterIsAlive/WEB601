import React from 'react';



export class Menuitem extends React.Component {


    render() {
        const menu =[{"name":"test1","price":"6"},{"name":"test2","price":"6"}];
        return (
          <div>
          {menu.map(function(d, idx){
             return (<li key={idx}>{d.name}</li>)
           })}
          </div>
        );
      }
}

export default Menuitem;