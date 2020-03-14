// Implement debounce


    const debounce = function(fun, delay) {
      let timer = null;

      return (...args) => {
        if (timer) {
          clearTimeout(timer);  
          timer = setTimeout(() => {
            fun(...args);
            timer = null;
          }, delay);
        }
      }
    }

    const debounceX = function(ff, delay) {
      let working = false;

      return (...args) => {

        if (!working) {
          working = true;
          ff(...args);
          setTimeout(() => {
            working = false;
          }, delay);
        }
      }
    }
