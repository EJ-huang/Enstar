 function throttling(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
          var context = this,
            args = arguments;
          var later = function() {
            timeout = null;
            // if (!immediate)
            func.apply(context, args);
          };
          if (timeout) return;
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

      let images = document.querySelectorAll("img");
      function scrollHandler() {
        let windowTop = window.scrollY;
        let windowBottom = windowTop + window.innerHeight;
        images.forEach(img => {
          let imgMiddle = img.offsetTop + img.height / 2;
          if (imgMiddle < windowBottom && imgMiddle > windowTop) {
            img.classList.remove("active");
          } else {
            img.classList.add("active");
          }
        });
      }

      window.addEventListener("scroll", throttling(scrollHandler));