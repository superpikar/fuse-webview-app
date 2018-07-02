# Fuse Webview App
Ship your website as Android/iOS app. All the things you need to create a basic webview using [fusetools](https://fuse-open.github.io).

## App Features 
- Back to previous page on back button
- Open BaseURL in webview if user navigate to about:blank
- Open native app when user click on a URL (if different host)
- Check app newest version on app startup
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
4. Open the project with FuseStudio to preview your modification during development. Please note that webview only running on device, doesn't run on preview. 

5. Draw your appicon as .png file, size 192x192 px. Then upload the file to https://jgilfelt.github.io/AndroidAssetStudio/icons-launcher.html to generate android icon. Put the output in `/src/assets/`. Or if you want to configure the icon yourslef, take a look at .unoproj file
    ```
    "Android": {
      "Icons": {
        "LDPI": "src/assets/drawable-mdpi/ic_launcher.png",
        "MDPI": "src/assets/drawable-mdpi/ic_launcher.png",
        "HDPI": "src/assets/drawable-hdpi/ic_launcher.png",
        "XHDPI": "src/assets/drawable-xhdpi/ic_launcher.png",
        "XXHDPI": "src/assets/drawable-xxhdpi/ic_launcher.png",
        "XXXHDPI": "src/assets/drawable-xxxhdpi/ic_launcher.png"
      }
    }
    ```


5. Build your app for production release, following this step https://fuse-open.github.io/docs/basics/preview-and-export.html
    ```
    fuse build --target=Android --configuration=Release
    ```

6. grab the output .apk file in the `build\Android\Release\[unoproj_name].apk`

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
