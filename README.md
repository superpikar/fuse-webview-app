# Fuse Webview App
Ship your website as Android/iOS app. All the things you need to create a basic webview using fusetools.

## Features 
- Back to previous page on back button
- Open BaseURL in webview if user navigate to about:blank
- Open native app when user click on a URL (if different host)
- [WIP] Check app newest version

## Known bugs
- if share to whatsapp, always opens a web page instead of installed native app

## Reference
- go back in webview https://forums.fusetools.com/t/navigation-in-webview/1173/4
- APK signer and keystore generator https://shatter-box.com/knowledgebase/android-apk-signing-tool-apk-signer/
- if error code is contains "A problem occurred evaluating project ':app'.", then please install android NDK `fuse install android` https://forums.fusetools.com/t/cant-preview-or-export-to-android/4125/20?u=superpikar
- in WebView, open link as new tab / native app https://keypoint.ro/blog/post/opening-webview-links-native-browser 
