/**
 * Created by liaoye on 2016/8/16.
 * 学习使用BackAndroid API  用于监听返回键按钮
 */
import React,{Component} from 'react';
import {
    Text,
    BackAndroid,
    ToastAndroid,
} from 'react-native';

export default class BackAndroidDemo extends Component{
    render(){
        return(
            <Text>请点击返回键</Text>
        );
    }
    //组件渲染完成之后
    componentDidMount() {
        BackAndroid.addEventListener('backPress', this.showToast);
    }

    showToast(){
        ToastAndroid.show('你点击了返回键',ToastAndroid.LONG);
        //饭后true的话代表拦截了退出app的事件
        return true;
    }
}