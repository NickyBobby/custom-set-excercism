function CustomSet(input) {
  this.array = input || [];
}

CustomSet.prototype.eql = function(newArray) {
  var array1 = this.array.sort();
  var array2 = newArray.array.sort();
  if (array1.length !== array2.length) {
    return false;
  }
 for (var i = 0; i < this.array.length; i++) {
   if (array1[i] !== array2[i]) {
     return false;
   }
 }
 return true;
};

CustomSet.prototype.delete = function(input) {
  if (this.array.indexOf(input) > -1) {
    var index = this.array.indexOf(input);
    this.array.splice(index, 1);
  }
  return this;
};

CustomSet.prototype.difference = function(input) {
  for (var i = 0; i < input.array.length; i++) {
    if (this.array.indexOf(input.array[i]) > -1) {
      this.delete(input.array[i]);
    }
  }
  return this;
};

CustomSet.prototype.disjoint = function(input) {
  var array1 = this.array.sort();
  var array2 = input.array.sort();
  var result = true;
  for (var i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) > -1) {
      result = false;
    }
  }
  return result;
};

CustomSet.prototype.empty = function() {
  this.array = [];
  return this;
};


module.exports = CustomSet;
