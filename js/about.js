const splide = new Splide('.splide', {
  padding: '3rem',
  gap: '2rem',
  rewind: true,
  rewindByDrag: true,
  pagination: false,
  speed: 400,
  breakpoints: {
		479: {
      gap: '20px',
      perpage: 1,
      padding: '0px'
    }
  },
});

splide.mount();