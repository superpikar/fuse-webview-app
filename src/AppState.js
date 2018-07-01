const Observable = require('FuseJS/Observable');

const isModalOpen = Observable(false);
const latestAppVersion = Observable('0.0.0');

function setModalOpen(value = false) {
  isModalOpen.value = value;
}

function setLatestAppVersion(value = '0.0.0') {
  latestAppVersion.value = value;
}

module.exports = {
  state: {
    isModalOpen,
    latestAppVersion,
  },
  setModalOpen,
  setLatestAppVersion,
}