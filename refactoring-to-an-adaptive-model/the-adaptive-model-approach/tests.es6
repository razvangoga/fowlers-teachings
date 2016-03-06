//use mocha and chai
it('night only', function () {
    assert.include(
        executeModel({ atNight: true }, [{ "condition": "atNight", "result": "expected" }]),
        'expected');
});

it("country", function () {
    const model = [{ condition: 'countryIncludedIn', conditionArgs: ['sparta', 'atlantis'], result: 'expected' }];
    expect(executeModel({ country: "sparta" }, model)).include("expected");
    expect(executeModel({ country: "athens" }, model)).not.include("expected");
});