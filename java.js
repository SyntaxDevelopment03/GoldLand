 document.addEventListener("DOMContentLoaded", () => {
      const lazyItems = document.querySelectorAll('.lazy-content');

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      lazyItems.forEach(item => observer.observe(item));
    });
   