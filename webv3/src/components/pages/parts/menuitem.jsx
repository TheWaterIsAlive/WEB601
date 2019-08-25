import React from 'react';



export class Menuitem extends React.Component {


    render() {
        
             return ( 
             <div>
              <div className="menuItem">
                <ol className="content inline">
                  <li>
                    <span >Tea</span>
                  </li>
                  <li>
                    <span>Hells Coffee</span>
                  </li>
                  <li>
                    <span >$6.00</span>
                  </li>
                </ol>
                 <img className="inline menuImg" alt="Tea" src="https://lh3.googleusercontent.com/kiHD4Rr8c82nmTM-jpbJMF1HbNxMPD4-i0XwpeJPmLAbT3uCN__JoUJkV_maN-r8Yl7decWqQOz2CoaZevi_CYyatrkoVii2yBK-7XJFLTkbu8F1T5nblbIlPhCZ_aJ2g0zxE5wSYQ=w1400"></img>
              </div>
            </div>
);
          
        
        
      }
}

export default Menuitem;