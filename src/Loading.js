/**
 * Created by tangjie on 2018/4/4.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ActivityIndicator

} from 'react-native';

import PropTypes from 'prop-types'
const { width, height } = Dimensions.get('window');

const LOADING_HUD = 0;
const LOADING_NOMAL = 1;

let loadingView = null;

export default class LoadingView extends Component {

    static propTypes = {

        // 外层容器属性
        top : PropTypes.number,
        left : PropTypes.number,
        bottom : PropTypes.number,
        width : PropTypes.number,
        height : PropTypes.number,
        backgroundColor : PropTypes.string,

        //hud属性
        hudStyle : PropTypes.any,
        hudBackgroundColor : PropTypes.string,
        hudDefaultText : PropTypes.string,
        hudTextStyle : PropTypes.any,
        activityIndicatorSize : PropTypes.string,
        activityIndicatorColor : PropTypes.string,
        hudCustomImage : PropTypes.any,
        hudImageStyle : PropTypes.any,

        //loading 属性
        loadingDefaultText : PropTypes.string,
        loadingStyle : PropTypes.any,
        loadingImage : PropTypes.any,
        loadingImageStyle : PropTypes.any,
        loadingTextStyle : PropTypes.any,

        offsetY : PropTypes.number,


    };

    static defaultProps = {

        top : 0,
        left : 0,
        bottom : 0,
        width : width,
        height : height,
        backgroundColor : 'transparent',

        hudBackgroundColor : 'black',
        hudDefaultText : 'loading...',
        loadingDefaultText : '',

        activityIndicatorSize : 'small', // small or large
        hudCustomGif : null,

        loadingImage : null,

        offsetY : 0,

    };

    constructor(props){
        super(props);
        this.state={

            show : false,
            showHud : false,
            showLoading : false,

            hudText : this.props.hudDefaultText,
            hudBackgroundColor : this.props.hudBackgroundColor,

            top : this.props.top,
            bottom : this.props.bottom,
            displayType : LOADING_HUD, // 0->loading  1->success 2->error 3->tip

            backgroundColor : this.props.backgroundColor,
            loadingText : this.props.loadingDefaultText,

            extraTop : this.props.offsetY,

        };

    }

    static loadingDidCreate(ref){

        loadingView = ref;
    }

    /**
     * 显示hud
     * @param text 等待提示问题，默认显示hudDefaultText
     * @param extraTop 中间动画视图y轴额外偏移量
     * @param bkColor hud背景色
     */
    static showHud(text='',extraTop=0,bkColor=''){

        loadingView.showHud(text,extraTop,bkColor)
    }


    /**
     * 显示loading
     * @param text 等待提示问题，默认显示loadingDefaultText
     * @param extraTop 中间动画视图y轴额外偏移量
     * @param bkColor 外层容器背景色
     */
    static showLoading(text='',extraTop=0,bkColor=''){

        loadingView.showLoading(text,extraTop,bkColor)
    }


    static dismiss(){

        loadingView.dismiss()
    }

    showHud(text='',extraTop=0,bkColor=''){

        this.setState({
            displayType : LOADING_HUD,
            show : true,
            showHud : true,
            hudText : text === '' ? this.props.hudDefaultText : text,
            extraTop : extraTop,
            hudBackgroundColor : bkColor === '' ? this.props.hudBackgroundColor : bkColor
        });
    }

    showLoading(text='',extraTop=0,bkColor=''){

        this.setState({
            displayType : LOADING_NOMAL,
            show : true,
            showLoading : true,
            loadingText : text === '' ? this.props.loadingDefaultText : text,
            extraTop : extraTop,
            backgroundColor : bkColor === '' ? this.props.backgroundColor : bkColor
        });
    }


    dismiss(){

        this.setState({show : false,showHud : false,showLoading : false,hudBackgroundColor : this.props.hudBackgroundColor, backgroundColor : this.props.backgroundColor,extraTop : 0})
    }

    componentDidMount(){

    }

    componentWillUnmount() {


    }

    renderNomalView(){

        const {loadingStyle,loadingImage,loadingImageStyle,loadingTextStyle,offsetY} = this.props;

        let image = (loadingImage == null ? require('./assets/loading_text.gif') : loadingImage);
        return(

            this.state.showLoading === true ? <View style={[styles.loadingStyle,loadingStyle,{marginTop : offsetY + this.state.extraTop}]}>

                <Image source={image} style={[styles.loadingImageStyle,loadingImageStyle]}/>
                {this.state.loadingText != null && this.state.loadingText.length > 0 ? <Text style={[styles.loadingTextStyle, loadingTextStyle]}>{this.state.loadingText}</Text> : null}
            </View> : null
        )

    }

    renderHudView(){

        const { hudStyle,hudTextStyle,hudCustomImage,hudImageStyle, offsetY } = this.props;
        return (

            this.state.showHud === true ?  <View style={[styles.hudStyle, hudStyle,{backgroundColor : this.state.hudBackgroundColor,marginTop : offsetY + this.state.extraTop}]}>

                {hudCustomImage == null ? <ActivityIndicator animating={this.state.show} size={this.props.activityIndicatorSize}/> : <Image source={hudCustomImage} style={[styles.gifImageStyle,hudImageStyle]}/>}
                {this.state.hudText != null && this.state.hudText.length > 0 ? <Text style={[styles.hudTextStyle, hudTextStyle]}>{this.state.hudText}</Text> : null}
            </View> : null
        )
    }


    renderLoadingView(type){

        if(type === LOADING_HUD){


            return(

                this.renderHudView()
            )

        } else if (type === LOADING_NOMAL){

            return (
                this.renderNomalView()
            )
        }
    }


    render() {
        return (
            <View style={{
                justifyContent : 'center', alignItems : 'center',
                width : this.props.width,height : this.props.height - this.state.top - this.state.bottom,
                backgroundColor : this.state.backgroundColor,top : this.state.top,
                position : 'absolute', left : this.state.show === true ? this.props.left : this.props.left + width}}>

                {this.renderLoadingView(this.state.displayType)}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    hudStyle :{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 0,
        width : 110,
        height : 110,
        backgroundColor : 'black',
        borderRadius: 10
    },
    hudTextStyle :{

        color : '#999999',
        fontSize : 13,
        marginTop : 15
    },

    gifImageStyle :{

        width : 30,
        height : 30
    },
    loadingStyle : {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 0,
        backgroundColor : 'transparent'
    },
    loadingImageStyle :{

    },

    loadingTextStyle :{

        color : '#999999',
        fontSize : 14,
        marginTop : 15
    },

    toastTextStyle : {

        color : 'white',
        fontSize : 14
    },

    toastStyle : {

        backgroundColor : 'black',
        borderRadius:5,
        paddingVertical : 10,
        paddingHorizontal: 13,
        justifyContent : 'center',
        alignItems : 'center'
    }
});
