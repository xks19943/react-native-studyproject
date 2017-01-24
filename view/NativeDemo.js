/**
 * Created by liaoye on 2016/8/23.
 * 学习使用如何调用原生的模块 react界面与原生界面的交互
 */

import React,{Component} from 'react';
import {
    NativeModules,
    ToastAndroid,
    View
} from 'react-native';

import CustomButton from './component/CustomButton'

export default class NativeDemo extends Component{

    show(){
         NativeModules.ToastModule.startActivityFromJs('好好学习',function (data) {
             ToastAndroid.show('从原生界面回调数据为:'+data,ToastAndroid.LONG);
         });
    }

    render(){
        return(
            <View>
                <CustomButton
                    text={'React调用原生界面并且回调数据'}
                    onPress={this.show.bind(this)}/>
            </View>

        );
    }
}