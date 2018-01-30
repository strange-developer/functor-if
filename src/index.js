const isFunction = require('lodash.isfunction');

class FunctorIf {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new FunctorIf(value);
  }

  map(fn) {
    return FunctorIf.of(fn(this.value));
  }

  mapIf(fn, truthy) {
    if ((isFunction(truthy) && truthy(this.value)) || (typeof truthy === 'boolean' && truthy)) {
      return FunctorIf.of(fn(this.value));
    }
    return this;
  }

  reduce(fn) {
    return fn(this.value);
  }
}

module.exports = FunctorIf;
