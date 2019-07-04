const expect = require('chai').expect;
const parseLocale = require('./parseLocale');

// TODO at the moment we're just using one per language
describe('parseLocale', function () {
  it('handles languages without regions', function () {
    expect(parseLocale('en')).to.equal('en');
  });

  it('handles languages with regions', function () {
    expect(parseLocale('en-gb')).to.equal('en');
  });
});
