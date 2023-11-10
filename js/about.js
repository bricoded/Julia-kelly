const splide = new Splide('.splide', {
  padding: '3rem',
  gap: '2rem',
  rewind: true,
  rewindByDrag: true,
  pagination: false,
  speed: 400,
  breakpoints: {
		479: {
      gap: '15px',
      perpage: 1,
      padding: '15px'
    }
  },
});

splide.mount();