const calculateStylePoints = (styleNotes) => {
  let sum = 0
  for (i = 0; i < styleNotes.length: i++) {
    sum += styleNotes[i]
  }
  return sum - styleNotes.max() - styleNotes.min()
};
  
module.exports = calculateStylePoints;
