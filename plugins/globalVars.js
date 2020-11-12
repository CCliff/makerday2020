export default (context, inject) => {
  inject('globalVars', {
    classPrefix: 'ank',
    breakpoints: {
      desktop: 1024,
      tablet: 640
    }
  });
}