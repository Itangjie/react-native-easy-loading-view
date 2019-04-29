
# react-native-easy-loading-view

[![license](https://img.shields.io/github/license/joinspontaneous/react-native-easy-loading-view.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/react-native-easy-loading-view.svg)](https://npm.im/react-native-easy-loading-view)

## 效果
![](http://imgfile.oytour.com/Upload/Common/App/loading_preview.gif)
![](http://imgfile.oytour.com/Upload/Common/App/loading_preview2.gif)

## 安装

`$ npm install react-native-easy-loading-view --save`

## 示例
Check [example](https://github.com/Itangjie/react-native-easy-loading-view/blob/master/example) in the  folder.

## 使用
引入（App根视图，入口处）
```javascript
import Loading from 'react-native-easy-loading-view';
render() {
        return (
            <View style={[{flex:1}]}>
                <App/>
                <Loading
                    ref={(view)=>{Loading.loadingDidCreate(view)}}
                />
            </View>
        );
    }
```
显示
```javascript
import Loading from 'react-native-easy-loading-view';

Loading.showHud(); //显示hud
Loading.showLoading(); //显示loading

Loading.dismiss(); // 消失
```
  

