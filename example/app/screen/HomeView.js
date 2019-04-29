/**
 * Created by tangjie on 2018/4/4.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
import Loading from 'react-native-easy-loading-view';

const ACTION_NOMAL = 'action_nomal';
const ACTION_WITHOUT_TEXT = 'action_without_text';
const ACTION_CUSTOM_TEXT = 'action_custom_text';
const ACTION_CUSTOM_OFFSETY = 'action_custom_offsety';
const ACTION_LOADING_NOMAL = 'action_loading_nomal';
const ACTION_LOADING_PARAMS= 'action_loading_params';
export default class HomeView extends Component {

    static navigationOptions = {
        title: 'HomeView',
    };
    constructor(props){
        super(props);
        this.state={

        };

    }

    onClick(action){

        if (action === ACTION_NOMAL) { // 默认加载初始化配置的属性

            Loading.showHud();
            setTimeout(()=>{
                Loading.dismiss()
            },5000)
        }else if (action === ACTION_WITHOUT_TEXT){ // 仅显示转圈，不需要文字

            Loading.showHud(null)
            setTimeout(()=>{
                Loading.dismiss()
            },5000)
        }else if (action === ACTION_CUSTOM_OFFSETY){ // 视图默认会在父容器的中间位置，第二个属性可以做调整（仅单次）

            Loading.showHud('',-200)
            setTimeout(()=>{
                Loading.dismiss()
            },5000)
        }else if (action === ACTION_CUSTOM_TEXT){
            //param1 -> 自定义文字（单次）  params2 -> 中间视图的y轴偏移量，负数表示往上（单次） params3 -> 中间视图的背景颜色(单次)
            //其他更多全局属性请在初始化时配置
            Loading.showHud('努力加载中...',-100,'#4B0082')
            setTimeout(()=>{
                Loading.dismiss()
            },5000)
        }else if (action === ACTION_LOADING_NOMAL){

            this.props.navigation.navigate('LoaidngTestNomal')
        }else if (action === ACTION_LOADING_PARAMS){

            this.props.navigation.navigate('loadingTestWithParams')
        }
    }

    render() {
        return (

           <View style={{ flex : 1 }}>

               <TouchableOpacity style={{ height : 60, width:width, justifyContent : 'center', backgroundColor: 'white', marginTop : 10 }} onPress={()=>{this.onClick(ACTION_LOADING_NOMAL)}}>
                   <Text style={{ color:'black', fontSize : 15,paddingLeft:15 }}>{'loading gif 动画(默认)'}</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{ height : 60, width:width, justifyContent : 'center', backgroundColor: 'white' }} onPress={()=>{this.onClick(ACTION_LOADING_PARAMS)}}>
                   <Text style={{ color:'black', fontSize : 15,paddingLeft:15 }}>{'loading gif 动画(带参数)'}</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{ height : 60, width:width, justifyContent : 'center', backgroundColor: 'white', marginTop : 10 }} onPress={()=>{this.onClick(ACTION_NOMAL)}}>
                   <Text style={{ color:'black', fontSize : 15,paddingLeft:15 }}>{'hud(默认)'}</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{ height : 60, width:width, justifyContent : 'center', backgroundColor: 'white' }} onPress={()=>{this.onClick(ACTION_WITHOUT_TEXT)}}>
                   <Text style={{ color:'black', fontSize : 15,paddingLeft:15 }}>{'hud(无文字)'}</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{ height : 60, width:width, justifyContent : 'center', backgroundColor: 'white' }} onPress={()=>{this.onClick(ACTION_CUSTOM_OFFSETY)}}>
                   <Text style={{ color:'black', fontSize : 15,paddingLeft:15 }}>{'hud(位置调整参数)'}</Text>
               </TouchableOpacity>

               <TouchableOpacity style={{ height : 60, width:width, justifyContent : 'center', backgroundColor: 'white' }} onPress={()=>{this.onClick(ACTION_CUSTOM_TEXT)}}>
                   <Text style={{ color:'black', fontSize : 15,paddingLeft:15 }}>{'hud(带参数->文字、位置、背景)'}</Text>
               </TouchableOpacity>

           </View>
        );
    }
}

const styles = StyleSheet.create({

});
