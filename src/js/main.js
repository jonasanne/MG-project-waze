(function () {
  const doc = document.documentElement
  // Using ES6 syntax (requires a transpiler)
  let scrollY = window.scrollY;
  doc.classList.remove('no-js')
  doc.classList.add('js')


  loadAni = (path, container) => {
    //check on scroll
    let waypoint = new Waypoint({
      element: container,
      handler: () => {
        const ani = lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: 'false',
          autoplay: 'false',
          path: path,
          rendererSettings: {
            progressiveLoad: 'false'
          }
        });
        ani.play();
        waypoint.destroy();
      },
      offset: 800
    })
  };

  loadSmAni = (path, container) => {
    const ani = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: path,
      rendererSettings: {
        progressiveLoad: 'true'
      }
    });
  }

  lottieFiles = () => {
    const containers = document.querySelectorAll('.js-lottie');
    const containersSmall = document.querySelectorAll('.feature-icon');
    loadAni("./images/animations/carpool-animation/carpool.json", containers[0]);
    loadAni("./images/animations/card-animation/card.json", containers[1]);
    loadAni("./images/animations/invoice-animation/invoice.json", containers[2]);


    loadSmAni("./images/animations/stadium-animation/stadium.json", containersSmall[0]);
    loadSmAni("./images/animations/city-animation/city.json", containersSmall[1]);
    loadSmAni("./images/animations/phone-animation/phone.json", containersSmall[2]);
  }

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    lottieFiles();
    sr.reveal('.hero-title, .hero-paragraph, .hero-cta, .screencast', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })

    sr.reveal('.feature, .pricing-table', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      viewFactor: 0.5,

    })
    sr.reveal('.feature-extended-image', {
      duration: 600,
      scale: 0.9,
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      viewFactor: 0.5
    })
  }
}())


