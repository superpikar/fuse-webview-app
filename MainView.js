const Observable = require('FuseJS/Observable');
const InterApp = require('FuseJS/InterApp');

const baseURL = 'https://lakonhidup.netlify.com';
const URL = Observable(baseURL);
const isVisible = Observable('Visible');
const ALLOWEDSCHEME = ['whatsapp://', 'line://', 'telegram://'];

/**
 * check if open ALLOWED_SCHEME
 * @param {String} url 
 */
function isOpenOtherApp(url) {
  let flag = false;
  ALLOWEDSCHEME.forEach((val) => {
    if (url.includes(val)) {
      flag = true;
    }
  });
  return flag;
}

/** 
 * function to compare if two URL are in the same host
 * @see https://stackoverflow.com/a/45983252/1843755
 */
function isSameHost(urlA, urlB) {
  // compare two URL
  if (urlA !== 'about:blank' && urlB !== 'about:blank') {
    const matchesUrlA = urlA.split('/');
    const matchesUrlB = urlB.split('/');
    return matchesUrlA[2] === matchesUrlB[2];
  }
  return true;
}

/**
 * function to be triggered on webview URL changed
 * workaround open native app by https://keypoint.ro/blog/post/opening-webview-links-native-browser
 */
function onUrlChanged() {
  console.log(`URL changed ${URL.value}`);
  // avoid about:blank page
  if (URL.value === 'about:blank') {
    URL.value = baseURL;
    isVisible.value = 'Visible';
    console.log('about:blank, open baseURL');
  }
  // if the same host, then do nothing
  else if (isSameHost(URL.value, baseURL)) {
    isVisible.value = 'Visible';
    console.log('same host, do nothing');
  }
  // launch InterApp to open the link with native app
  else {
    isVisible.value = 'Hidden';
    const newURL = JSON.parse(JSON.stringify(URL.value));
    InterApp.launchUri(URL.value);
    // reset our URL, go back to previous page
    console.log('go back to previous URL');
    webView.goBack();
  }
}

function onBeginLoading() {
  console.log('begin loading');
  isVisible.value = 'Hidden';
}

module.exports = {
  baseURL,
  URL,
  isVisible,
  onUrlChanged,
  onBeginLoading,
};
