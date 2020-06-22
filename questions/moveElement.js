   const move = (duration, distance, el) => {
      const stepPerFrame = distance / (duration * 60);

      let position = 0;
      const step = () => {
        position = position + stepPerFrame;
        el.style.transform = `translateX(${Math.round(position)}px)`;

        if (position < distance) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    
    window.onload = () => move(0.3, 100, document.querySelector('#str1')); 
   
