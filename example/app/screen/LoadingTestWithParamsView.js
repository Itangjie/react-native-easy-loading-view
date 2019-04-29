/**
 * Created by tangjie on 2018/4/4.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Dimensions,ScrollView
} from 'react-native';

const { width, height } = Dimensions.get('window');
import Loading from 'react-native-easy-loading-view';

export default class LoadingTestWithParamsView extends Component {

    static navigationOptions = {
        title: 'LoaindNomal',
    };
    constructor(props){
        super(props);
        this.state={

            testData : null,
        };


    }

    componentDidMount(){

        Loading.showLoading('加载中...',-100)

        this.timerout = setTimeout(()=>{

            Loading.dismiss()
            let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
            this.setState({testData : data});

        },5000)
    }

    componentWillUnmount() {

        Loading.dismiss()
        this.timerout && clearTimeout(this.timerout)
    }

    renderList(data){


        return data.map((item,key)=>{

            return(

                <View style={{ width : width, height : 60,borderBottomColor : '#ECECEC',borderBottomWidth:1 , justifyContent : 'center', backgroundColor: 'white'}} key={key}>
                    <Text style={{ color: '#333333',fontSize : 13, paddingLeft: 15 }}>{'这是第' + (key + 1) + '行数据'}</Text>
                </View>
            )
        })
    }

    render() {
        return (

            <View style={{ flex : 1 }}>
                <ScrollView style={{ flex : 1 }}>
                    {this.state.testData != null ? this.renderList(this.state.testData) : null}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
