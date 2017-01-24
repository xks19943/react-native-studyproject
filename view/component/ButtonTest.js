/**
 * Created by liaoye on 2016/8/24.
 */
import React,{Component} from 'react';
import {
    View,
    ToastAndroid,
} from 'react-native';
import Button from './Button';
export default class ButtonTest extends Component{
    render(){
        return(
            <Button text={'点击按钮'}
                    onPress={
                        (event)=>{ ToastAndroid.show(event.nativeEvent.data, ToastAndroid.SHORT);}
                    }
                    onLongPress={
                        (event)=>{ ToastAndroid.show(event.nativeEvent.desc, ToastAndroid.SHORT);}
                    }/>
        );
    }
}