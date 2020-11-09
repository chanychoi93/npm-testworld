// module.exports.area = (radius) => Math.PI * radius * radius;
// module.exports.perimeter = (radius) => 2 * Math.PI * radius;

function area(radius) {
  return Math.PI * radius * radius;
}

function perimeter(radius) {
  return Math.PI * radius * 2;
}

module.exports.area = area;
module.exports.perimeter = perimeter;
