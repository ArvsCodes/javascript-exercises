const convertToCelsius = function(tempF) {
  tempC = (tempF - 32) * 5 / 9
  tempC = +tempC.toFixed(1);
  return tempC
};

const convertToFahrenheit = function(tempC) {
  tempF= (tempC * 9 / 5) + 32
  tempF = +tempF.toFixed(1);
  return tempF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
