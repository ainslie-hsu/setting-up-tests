describe('async map', () => {
  test('should pass the completed tasks to its callback', () => {
    const wait2For2 = function wait2For2(callback) {
      setTimeout(() => {
        callback(2);
      }, 200);
    };

    const wait3For1 = function wait3For1(callback) {
      setTimeout(() => {
        callback(1);
      }, 300);
    };

    asyncMap([wait2For2, wait3For1], (results) => {
      /* This should work regardless of order because of
        * the time it takes to execute these 2 functions
        */
      results.should.eql([2, 1]);
      results.length.should.equal(2);
      done();
    });
  });
});
