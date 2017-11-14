var Roman = require('./../js/roman.js').romanModule;
describe('Roman', function() {


  it('should test if our input is converted to roman', function() {
    var numToRoman = new Roman()
    expect(numToRoman.convertToRoman(4999)).toEqual('MMMMCMXCIX');
  });
});
