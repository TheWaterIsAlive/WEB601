import React from 'react';
import {Menuitem} from './menuitem'
export class ContentSpace extends React.Component {
  render() {

  

    return(
        <div className="properSpacing">
          <div className="contentFormat">
           <Menuitem />
           <Menuitem />
           <Menuitem />
          </div>
        
          
          <div className="contentFormat"></div>
        </div>
        );

    }
}

export default ContentSpace;