// Create a function to move an element. The function arguments are,
// distance, duration, and the element to move.

   const move = (duration, distance, el) => {
      el.style.position = 'absolute';
      const stepPerFrame = distance / (duration * 60);
      console.log(stepPerFrame);
      let position = 0;
      const step = () => {
        position = position + stepPerFrame;
        el.style.transform = `translateX(${Math.round(position)}px)`;
        console.log(position < distance, position);
        if (position < distance) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    
    window.onload = () => move(0.3, 100, document.querySelector('#str1')); 
   
