var CustomSet = require('./custom-set');

describe('CustomSet', function() {
  it('can compare equality of sets', function(){
    var subject = new CustomSet([3, 2, 1]);
    var duplicateSubject = new CustomSet([3, 2, 1]);
    expect(subject.eql(duplicateSubject)).toBe(true);

    var unOrderedDuplicateSubject = new CustomSet([3, 1, 2]);
    expect(subject.eql(unOrderedDuplicateSubject)).toBe(true);

    var nonDuplicateSubject = new CustomSet([2, 1]);
    expect(subject.eql(nonDuplicateSubject)).toBe(false);
  });

  it('can delete elements', function(){
    var expected = new CustomSet([1, 3]);
    var actual = new CustomSet([3, 2, 1]).delete(2);
    expect(actual.eql(expected)).toBe(true);

    var expected2 = new CustomSet([1, 2, 3]);
    var actual2 = new CustomSet([3, 2, 1]).delete(4);
    expect(actual2.eql(expected2)).toBe(true);
  });

  it('can check for difference', function(){
    var expected = new CustomSet([1, 3]);
    var actual = new CustomSet([3, 2, 1]).difference(new CustomSet([2, 4]));
    expect(actual.eql(expected)).toBe(true);
    var expected2 = new CustomSet([1, 2, 3]);
    var actual2 = new CustomSet([1, 2, 3]).difference(new CustomSet([4]));
    expect(actual2.eql(expected2)).toBe(true);
  });

  it('can test disjoint', function() {
    var actual = new CustomSet([1, 2]).disjoint(new CustomSet([3, 4]));
    expect(actual).toBe(true);
    var actual2 = new CustomSet([1, 2]).disjoint(new CustomSet([2, 3]));
    expect(actual2).toBe(false);
    var actual3 = new CustomSet().disjoint(new CustomSet());
    expect(actual3).toBe(true);
  });

  it('can be emptied', function() {
    var actual = new CustomSet([1, 2]).empty();
    var expected = new CustomSet();
    expect(actual.eql(expected)).toBe(true);
    var actual2 = new CustomSet().empty();
    var expected2 = new CustomSet();
    expect(actual2.eql(expected2)).toBe(true);
  });
});
