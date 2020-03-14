// Implement debounce

    const debounce = function(ff, delay) {
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
