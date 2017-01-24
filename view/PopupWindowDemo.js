/**
 * Created by liaoye on 2016/9/1.
 */
import React,{ Component } from 'react';
import {
    NativeModules,
    View,
    ToastAndroid,
} from 'react-native';

import CustomButton from './component/CustomButton';

export default class PopupWindowDemo extends Component{

    show(){
        NativeModules.PopupModule.showPopup((msg)=>{
            ToastAndroid.show('数据为:'+msg,ToastAndroid.LONG);
        });
    }

    render(){
        return(
            <CustomButton text={'点击显示PopupWindow'}
                          onPress={this.show.bind(this)}/>
        );
    }
}