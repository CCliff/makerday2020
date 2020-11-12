export default (context, inject) => {
  function nameClass (className, element, variations) {
    const variationsList = typeof variations === 'string' ? [variations] : variations;

    let base = `${this.$globalVars.classPrefix}-${className}`;

    if (element) {
      base += `_${element}`;
    }

    let classes = base;

    if (variationsList) {
      variationsList.forEach((variation) => {
        classes += ` ${base}--${variation}`;   
      });
    }

    return classes;
  }

  inject('nameClass', nameClass)
}