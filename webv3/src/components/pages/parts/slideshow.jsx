import React from 'react';
import { Slide } from 'react-slideshow-image';
 
 const slideImages = [
    'https://lh3.googleusercontent.com/B_NUq625isJ64CSTei3uiNJybFkQtrqN7fd0V_KfCNkDxm3I82m4e2S-IA03PnRabHUoo5PyxV5EaHZUT4pgtbFHn1RPzXjiCGsysVquP3fk_X9josdZQRN_pTrBGlecvXYOU4rlCw=w1400',
    'https://lh3.googleusercontent.com/kiHD4Rr8c82nmTM-jpbJMF1HbNxMPD4-i0XwpeJPmLAbT3uCN__JoUJkV_maN-r8Yl7decWqQOz2CoaZevi_CYyatrkoVii2yBK-7XJFLTkbu8F1T5nblbIlPhCZ_aJ2g0zxE5wSYQ=w1400',
    'https://lh3.googleusercontent.com/YcvU6d6tMDLwmgDdvbcjO7ieLqDZjbf8HQ89UTh8obGdQlw79Of_gFZp-W9BPn2LzAxJi-X-nfFDSiyfsuxWCg-3fxubFVowBzKF7MaPie1T-60E0CY3tdVDXr_DhL4ttE_uFRbNuA=w1400'
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
            <p>Alfie could put anything on a pizza and make it taste fabulous, I swear he could. There were the days he pulled a plain cheese from the oven just to make us laugh, but most days it was an edible form of his crazy wonderful imagination. It was the thing we looked forward to the most after our day. Nothing surprises us anymore, but we're still amazed each time supper comes around.</p> 
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            
            </div>
              <p>Sasha tool a bite of the omlette, cheesy with dark leafy greens. She smiled, "Tamal, that's so good, what's the green stuff?"
With a boyish grin he raised his brows, opening up his eyes, "Stinging nettle, chives and dandelion leaves."
Sasha paused as if her thoughts had stopped entirely, "Holy. That tastes good."
He gave a shrug, the one he always gave when he was proud of himself but tickled with his own shyness. "Chuck out the stems from the dandelions, boil the rest together for a few minutes, cold water, squeeze, chop. That's it. Sting all gone. Eat what wants to grow, easy."</p> 
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
            <p>But the real star is the food. Tables laden with delicacies line the walls. Everything you can think of, and things you have never dreamed of, lie in wait. Whole roasted cows and pigs and goats still turning on spits. Huge platters of fowl stuffed with savoury fruit and nuts. Ocean creatures drizzled in sauces or begging to be dipped in spicy concoctions. Countless cheeses, breads, vegetables, sweets, waterfalls of wine, and streams of spirits that flicker with flames.</p> 
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow; 