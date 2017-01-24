/**
 * Created by liaoye on 2016/8/15.
 * 学习webview的使用
 */
import React,{Component} from 'react';
import {
    View,
    WebView
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class WebViewDemo extends Component{
    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    render(){
        let NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor:'#ffffff',
        };

        var TEST_URL = 'https://facebook.github.io/react-native/';
        return(
            <View style={{flex:1}}>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <WebView url={TEST_URL}
                    //开启存储
                    domStorageEnabled={true}
                    //启动加载状态
                    startInLoadingState={true}
                    //开启javascript
                    javaScriptEnabled={true}>
                </WebView>
            </View>
        );
    }
}