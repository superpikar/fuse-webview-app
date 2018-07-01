const AppConfig = require('/src/AppConfig');

module.exports = {
  getAppInfo() {
    return fetch(AppConfig.APP_INFO_JSON)
      .then((response) => {
        return response.json();
      });
  }
}