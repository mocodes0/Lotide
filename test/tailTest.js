const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("should return ['Lighthouse', 'Labs', 'Lotide']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs", "Lotide"]), ["Lighthouse", "Labs", "Lotide"]);
  });
});
