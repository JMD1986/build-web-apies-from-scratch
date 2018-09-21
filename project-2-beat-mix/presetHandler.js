// Use this presets array inside your presetHandler
const presets = require('./presets');
const getPreset = (index) => {
  return presets[index] || null;
};

const createOrUpdatePreset = (index, array) => {
  if (!presets[index]) {
    return;
  }
  presets[index] = array;
  return presets[index];
};

// Complete this function:
const presetHandler = (method, index, newPresetArray) => {


};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
