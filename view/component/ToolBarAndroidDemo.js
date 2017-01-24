/**
 * Created by liaoye on 2016/8/15.
 * 学习ToolbarAndroid组件
 */
import React,{Component} from 'react';
import {
    ToolbarAndroid,
    View,
    StyleSheet,
    Text,
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class ToolBarAndroidDemo extends Component {
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
                    ToolbarAndroid示例
                </Text>
                <ToolbarAndroid
                    actions={toolbarActions}
                    navIcon={require('./../../images/add4.png')}
                    style={styles.toolbar}
                    subtitle="副标题"
                    title="主标题">
                </ToolbarAndroid>
            </View>
        );
    }
}
var toolbarActions = [
    //多个菜单图标的话会把标题内容挤掉...
    {title: 'Create', icon: require('./../../images/choice1.png'), show: 'always'},
    {title: '溢出栏1'},
    {title: '溢出栏2'},
    {title: '溢出栏3', icon: require('./../../images/choice1.png'), show: 'never',showWithText:false},
    {title: 'Settings', icon: require('./../../images/choice2.png'), show: 'always'},
];
const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});