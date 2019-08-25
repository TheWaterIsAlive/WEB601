import React from 'react';
import { Slide } from 'react-slideshow-image';
 
 const slideImages = [
    'https://lh3.googleusercontent.com/RrQ6UAXUlsqbAuwA38uFdXsj0eoA9MuNxuwPoKZycgl95d_wslLLOOUA5HvBj3ACdawy6gwsA4przmyml3aN4DmNGxbisfLYWmU4NvHa6Hj1Q9JGAaba6fv_XOhW_c8V6UDdLiiQOg=w1400',
    'https://lh3.googleusercontent.com/i8ME7_li6WbAfm4Tmn2hcA5KV_rpfpvwasrR1tigPDYlEW1W5x-1kOXdNaqFx10kEXDOMvPt-hP19yEfYbSpUTbSxF8UX9ob0uosErP1TmHgzIK2QVAvTkyaA2_QGiEguDFm2mJ26A=w1400',
    'https://lh3.googleusercontent.com/dLjdHO8cXWokFtEwWa4Q5LVyxuAXK2H0sOgzddUtxhLCQqotA07Sd1yFRV6BAYVEqxRFXjjXpauyF5w2Bf_XCKTb0-cKy9LVOjkcvbhUOkbSOw8-E4zeCe88qUAVKY8Z-8p9X7VlGg=w1400'
  ];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
export const Slideshow = () => {
    return (
      <div className="slide-container slideformate properSpacing" >
        <Slide {...properties}>
          <div className="each-slide" >
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow; 