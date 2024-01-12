---
title: "常用MVEL表达式"
categories:
  - 教程
toc: true
date: "2023-01-05"
---

MVEL表达式能实现很多功能，因为它可以调用Android SDK，而且ShortX还为MVEL执行器添加了Android Context，有了这两个条件，它能实现的功能就非常多了。

MVEL表达式[语法官方网站](http://mvel.documentnode.com/#language-guide-for-2.0)
Andrid SDK [API 文档](https://developer.android.com/reference/packages)


### Webview 相关

**获取当前webview实现的包名**

```java
android.webkit.WebViewFactory.getUpdateService().getCurrentWebViewPackageName()
```

**判断当前webview实现的包名是否是XXX**

```java
android.webkit.WebViewFactory.getUpdateService().getCurrentWebViewPackageName() == "com.google.android.webview"
```


**切换webview**

```java
android.webkit.WebViewFactory.getUpdateService().changeProviderAndSetting("package_name")
```



### 系统设置相关

**获取字体缩放**

```java
android.provider.Settings$System.getFloat(context.contentResolver, "font_scale")
```

**设置字体缩放**

默认是1.0f，表示缩放倍数

```java
android.provider.Settings$System.putFloat(context.contentResolver, "font_scale", 1.0)
```



**获取Wifi密码**

```java
wifiPasswords = "";

configs = context.getSystemService(context.WIFI_SERVICE).getPrivilegedConfiguredNetworks();
    
foreach(conf : configs) {
    wifiPasswords += conf.SSID + "-->" + conf.preSharedKey + "\n";
}
          
wifiPasswords;
```



