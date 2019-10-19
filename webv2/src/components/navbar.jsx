import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
       
              <li>
        <a href={'/' + page} class="navBar">
          {page}
        </a>
        </li>
       
      )
    });

    return <div class="navBack"><ul><nav>{navLinks}</nav></ul></div>;
  }
}