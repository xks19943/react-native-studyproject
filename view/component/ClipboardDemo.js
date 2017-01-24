/**
 * Created by liaoye on 2016/8/4.
 * 粘贴板的使用
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    Clipboard,
    ToastAndroid,
    StyleSheet
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class ClipboardDemo extends Component{
    //设置剪切的内容 需在异步执行 类似于java的子线程执行 然后在主线程获取数据
    async setClipboardContent(){
        Clipboard.setString('Welcome to ReactNative');
        try {
            var content = await Clipboard.getString();
            ToastAndroid.show('粘贴板的内容为:'+content,ToastAndroid.SHORT);
        } catch (e) {
            ToastAndroid.show(e.message,ToastAndroid.SHORT);
        }
    }

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
        return(
            <View>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
                    粘贴板示例
                </Text>
                <Text style={styles.welcome}
                      onPress={()=>this.setClipboardContent()}>
                    点击我复制'Welcome to ReactNative'并且展示
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome:{
        fontSize:20,
        backgroundColor:'#3142f5',
        color:'#fff'
    }
})