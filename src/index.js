
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  const res = [];
  for (let i=0; i<matrix.length; i++)
    if (i%2) res.push(...matrix[i].reverse())
    else res.push(...matrix[i]) 
  return res;
}
