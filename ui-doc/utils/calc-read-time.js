const calculateReadTime = (rawString, readWordPerMin = 350) => {
  return Math.ceil(rawString.length / readWordPerMin);
};

module.exports = calculateReadTime;
