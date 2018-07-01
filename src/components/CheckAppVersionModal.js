const InterApp = require('FuseJS/InterApp');
const AppConfig = require('/src/AppConfig');
const AppState = require('/src/AppState');
const AppService = require('/src/AppService');

function openModal() {
  AppState.setModalOpen(true);
}

function closeModal() {
  AppState.setModalOpen(false);
}

function downloadApp() {
  closeModal();
  if (AppConfig.APP_OS === 'ios') {
    InterApp.launchUri(AppConfig.APPSTORE_URL);
  } else {
    InterApp.launchUri(AppConfig.PLAYSTORE_URL);
  }
}

AppService.getAppInfo()
  .then((response) => {
    // console.log(JSON.stringify(response));
    if (AppConfig.APP_VERSION < response.appVersion) {
      AppState.setLatestAppVersion(response.appVersion);
      openModal();
    }
  });

module.exports = {
  AppConfig,
  state: AppState.state,
  openModal,
  closeModal,
  downloadApp,
}