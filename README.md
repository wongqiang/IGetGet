# 好文共读

## 功能

抓取好文共读文章，保存正文、音频、网页源代码，文件夹名为文章标题名。

## 安装

### Node.js

[https://nodejs.org/en/](https://nodejs.org/en/) 下载安装Node.js v7

### 安装AnyProxy

```
npm install -g anyproxy@beta
```

### 配置证书

```
anyproxy-ca
anyproxy --intercept
```

### 使用证书

[http://anyproxy.io/cn.html#osx系统信任ca证书](http://anyproxy.io/cn.html#osx系统信任ca证书) 对照文档设置PC和手机证书信任

### 设置代理

[http://anyproxy.io/cn.html#配置ios/android系统代理](http://anyproxy.io/cn.html#配置ios/android系统代理) PC与手机处于统一局域网下，手机设置代理为PC的8001端口，详情见文档

### 下载项目

```
git clone https://github.com/Germey/IGetGet.git
```

### 安装依赖

```
npm install 
```

### 运行项目

```
anyproxy --intercept --rule spider.js
```

### 测试运行

手机打开文章，可见项目下出现文章标题命名的文件夹，文件夹中包含了音频，文本，网页。