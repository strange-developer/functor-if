const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const FunctorIf = require('../src');

const expect = chai.expect;

chai.use(sinonChai);

describe('FunctorIf', () => {
  it('constructor', () => {
    const expected = Object.create(FunctorIf.prototype, {
      value: { value: 'test', enumerable: true },
    });
    expect(new FunctorIf('test')).to.deep.eq(expected);
  });
  it('of', () => {
    const expected = new FunctorIf('test');
    const actual = FunctorIf.of('test');
    expect(actual).to.deep.eq(expected);
    expect(actual instanceof FunctorIf).to.be.true;
  });
  describe('map', () => {
    it('executes function', () => {
      const spy = sinon.spy();
      const actual = FunctorIf.of({ definitely: 'monads rock!' }).map(spy);
      expect(spy).to.have.been.calledOnce;
      expect(actual instanceof FunctorIf).to.be.true;
    });
    it('returns a FunctorIf', () => {
      const testFn = val => val;
      const actual = FunctorIf.of({ definitely: 'monads rock!' }).map(testFn);
      expect(actual instanceof FunctorIf).to.be.true;
    });
  });
});
