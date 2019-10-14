const calculateDistancePoints = (distance, hillSize, kPoint) => {
    if (hillSize =< 109) {
      return 60 + (distance - kPoint) * 2
    } else if (hillSize >= 110 && hillSize =< 184) {
      return 60 + (distance - kPoint) * 1.8
    } else {
      return 120 + (distance - kPoint) * 1.2
    }
};

module.exports = calculateDistancePoints;
