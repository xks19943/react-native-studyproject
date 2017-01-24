/**
 * Created by liaoye on 2016/8/24.
 */
import React,{Component,PropTypes} from 'react';
import {
    requireNativeComponent,
    View,
    ToastAndroid,
} from 'react-native';
var NativeButton = requireNativeComponent('RCTButton',Button,{
    nativeOnly:{onClick:true,onLongClick:true}
});

export  default class Button extends Component{

    //定义NativeButton的属性
    static PropTypes = {
        ...View.propTypes,
        text:PropTypes.string,
        onClick:PropTypes.func.isRequired,
    }

    render(){
        return(
            <NativeButton
                style={{width:120,height:50}}
                text={this.props.text}
                onClick={(event)=>{this.props.onPress(event)}}
                onLongClick={(event)=>{this.props.onLongPress(event)}}/>
        );
    }
}