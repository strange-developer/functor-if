# functor-if

Functor implemented in JavaScript which contains conditional execution of a function through the
method `.mapIf`

## API

constructor(val: any): Functor<val>
Returns a value wrapped in a functor.

### of(val: any): Functor<val>
Returns a value wrapped in a functor.

### map(fn: () => {}): Functor<val>
Runs a function on the value contained in the functor. Returns the result of running the function on the value in a Functor.
  
### mapIf(fn: () => {}, truthy: Function | bool)
In the case of `truthy` being a function, the function is run on the value enclosed in the functor and if that value results in a truthy value, the `fn` supplied is run over the value contained in the functor and a Functor is returned with the result.
In the case of `truthy` being a boolean, if `truthy` is true, the `fn` supplied is run over the value contained in the functor and a Functor is returned with the result.

### reduce(fn: () => {}): any
Returns the result of running an operation over the value contained in the Functor. Note: The value does not get wrapped in a Functor but the direct result is returned.
