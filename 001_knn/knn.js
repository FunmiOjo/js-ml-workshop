
//Start off with what passes the first test.
function KNN(kSize){
  this.kSize = kSize;
  this.points = [];
}

KNN.prototype.train = function(points) {
  this.points = this.points.concat(points)
}

function subtractVectors(vector1, vector2) {
  let difference =  vector1.map(function(elem, index) {
    return vector1[index] - vector2[index]
  })
  return difference
}

function euclideanNorm(vector) {
  let norm = Math.sqrt(vector.reduce(function(accum, current) {
    return accum + (current * current)
  }, 0))
  return norm
}

KNN.prototype._distance = function(vector1, vector2) {
  return euclideanNorm(subtractVectors(vector1, vector2))
}

KNN.prototype._distances = function(unclassifiedVector, trainingData) {
  let distances = trainingData.map((dataPoint) => {
    return [this._distance(unclassifiedVector, dataPoint[0]), dataPoint[1]]
  })
  return distances
}

function compare(a, b) {
  return a[0] - b[0]
}

KNN.prototype._sorted = function(arr) {
  return arr.sort(compare).map((elem) => {
    return elem[1]
  })
}

module.exports = KNN
