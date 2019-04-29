
# react-native-easy-loading-view

[![license](https://img.shields.io/github/license/joinspontaneous/react-native-easy-loading-view.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/react-native-easy-loading-view.svg)](https://npm.im/react-native-easy-loading-view)

## Preview
![](http://imgfile.oytour.com/Upload/Common/App/loading_preview.gif)
![](http://imgfile.oytour.com/Upload/Common/App/loading_preview2.gif)

## Getting started

`$ npm install react-native-easy-loading-view --save`

## Example
Check [example](https://github.com/Itangjie/react-native-easy-loading-view/blob/master/example) in the  folder.

## Usage
```javascript
import Loading from 'react-native-easy-loading-view';

// TODO: What to do with the module?
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
  

