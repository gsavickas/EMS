const assert = require('../savickas-Assignment-7.2');

describe("Assignment 7.2 Str.split", function(){
  it("Should return an array of fruits that is comma separated", function(){
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  })
})
