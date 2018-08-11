
//Start off with what passes the first test.
function KNN(kSize){
	this.kSize = kSize;
	this.points = [];
}

KNN.prototype.train = function(points) {
  this.points = this.points.concat(points);
}


module.exports = KNN
