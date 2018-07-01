const Observable = require('FuseJS/Observable');
const InterApp = require('FuseJS/InterApp');
const AppConfig = require('/src/AppConfig');
const AppHelper = require('/src/AppHelper');
const AppState = require('/src/AppState');

const URL = Observable(AppConfig.BASE_URL);
const isVisible = Observable('Visible');

/**
 * function to be triggered on webview URL changed
 * workaround open native app by https://keypoint.ro/blog/post/opening-webview-links-native-browser
 */
function onUrlChanged() {
  console.log(`URL changed ${URL.value}`);
  // avoid about:blank page
  if (URL.value === 'about:blank') {
    URL.value = AppConfig.BASE_URL;
    isVisible.value = 'Collapsed';
    console.log('about:blank, open BASE_URL');
  }
  // if the same host, then do nothing
  else if (AppHelper.isSameHost(URL.value, AppConfig.BASE_URL)) {
    isVisible.value = 'Visible';
    console.log('same host, do nothing');
  }
  // launch InterApp to open the link with native app
  else {
    isVisible.value = 'Collapsed';
    InterApp.launchUri(URL.value);
    // reset our URL, go back to previous page
    console.log('go back to previous URL');
    webView.goBack();
  }
}

function onBeginLoading() {
  console.log('begin loading');
  isVisible.value = 'Collapsed';
}

function onPageLoaded(res) {
  // get from evaluate handler on webview page loaded
  const result = JSON.parse(res.json);
  console.log(`page loaded ${result.url}`);
}

module.exports = {
  URL,
  isVisible,
  state: AppState.state,
  onUrlChanged,
  onBeginLoading,
  onPageLoaded,
};
