
describe("Testing action.js file", function() {

  it("getAction(): Action is between 0-5", function() {
    var result = getAction();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(5);
  });
  it("actionChoose(0): Action is between 0-4 as can't RECORD or RELEASE yet", function() {
    actionChoose(0);
    var result = JSONband[0].action;
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(4);
  });

});
