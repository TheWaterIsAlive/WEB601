import React from 'react';
import {Menuitem} from './menuitem'
import {BuisnessDetail} from './buisnessDetails'
import {CreateUser} from './createUser'

export class ContentSpace extends React.Component {

 
  render() {
  
    return (
        <div className="properSpacing">
          <div className="contentFormat">
          <Menuitem />
          </div>
        
          
          <div className="contentFormat contentFormatLeft">
            <CreateUser />
            <BuisnessDetail />
          </div>
        </div>
        );

    }
}

export default ContentSpace;