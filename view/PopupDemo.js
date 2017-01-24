import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Popup from 'react-native-popup';

export default class PopupDemo extends Component{

    constructor(props) {
        super(props);
        //定义一个状态 其中属性为language,值为空
        this.popup = {popup: ''};
    }

    onPressHandle() {
        this.popup.confirm({
            title: '这是确认对话框',
            content: ['come on!', 'go!'],
            ok: {
                text: '确认',
                callback: () => {
                    this.popup.alert('点击了确认!');
                },
            },
            cancel: {
                text: '取消',
                callback: () => {
                    this.popup.alert('点击了取消！');
                },
            },
        });
    };

    render(){
        return(
            <View style={styles.container}>
                <Text
                    onPress={this.onPressHandle.bind(this)}>点击我!</Text>
                <Popup ref={(popup) => { this.popup = popup }}/>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});