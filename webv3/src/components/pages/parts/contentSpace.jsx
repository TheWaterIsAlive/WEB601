import React from 'react';
import {Menuitem} from './menuitem'
import {BuisnessDetail} from './buisnessDetails'

export class ContentSpace extends React.Component {
  render() {

  

    return(
        <div className="properSpacing">
          <div className="contentFormat">
           <Menuitem />
           <Menuitem />
           <Menuitem />
          </div>
        
          
          <div className="contentFormat contentFormatLeft">
            <BuisnessDetail />
          </div>
        </div>
        );

    }
}

export default ContentSpace;