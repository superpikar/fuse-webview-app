# Fuse Webview App
Ship your website as Android/iOS app. All the things you need to create a basic webview using [fusetools](https://fuse-open.github.io).

## App Features 
- Back to previous page on back button
- Open BaseURL in webview if user navigate to about:blank
- Open native app when user click on a URL (if different host)
- [WIP] Check app newest version
- [WIP] Exit app modal

## App Limitation
- If share to whatsapp/email, sometimes opens a web page instead of installed native app
- In android cannot exit application


## How to Setup
1. Install FuseOpen https://fuse-open.github.io
2. Install android SDK using CLI,  
    ```
    fuse install android
    ```
3. Put any accessible .json file in your server/cloud (i.e : http://yoursite.com/json/app-info.json), it should contain at least 
    ```json
    {
      "appVersion": "2.0.0"
    }
    ```
3. Before build your app, please change the URL of webview and  APP_INFO_JSON in `/src/AppConfig.js`
    ```js
    module.exports = {
      APP_VERSION: 'current app version (i.e: 1.0.0)',
      BASE_URL: 'url of webview',
      APP_INFO_JSON: 'json file of latest app information',
    }
    ```
4. Build your app following this step https://fuse-open.github.io/docs/basics/preview-and-export.html


## Note for developer
- Module not found if require js using relative path. I dont know why. Thus, I use require js using absolute path in all js.
- Resource Color not applied on builded app. Looking for solution.

## Reference
- go back in webview 
  https://forums.fusetools.com/t/navigation-in-webview/1173/4
- APK signer and keystore generator https://shatter-box.com/knowledgebase/android-apk-signing-tool-apk-signer/
- if error code is contains "A problem occurred evaluating project ':app'.", then please install android NDK. https://forums.fusetools.com/t/cant-preview-or-export-to-android/4125/20?u=superpikar 

  ```fuse install android``` 
- in WebView, open link as new tab / native app https://keypoint.ro/blog/post/opening-webview-links-native-browser 
