/**
 * Created by liaoye on 2016/8/15.
 * 用来学习DrawerLayoutAndroid
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    DrawerLayoutAndroid
} from 'react-native';
import StyleUtil from '../util/StyleUtil';
import StatusBars from './StatusBars';
import LeftButton from './LeftButton';
import NavigationBar from 'react-native-navbar';

export default class DrawerLayoutDemo extends Component{

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
                    我是菜单页面
                </Text>
            </View>
        );
        let NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor:'#ffffff',
        };

        return (
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    //设置划出方向
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    //设置抽屉的渲染布局
                    renderNavigationView={() => navigationView}>
                    <StatusBars/>
                    <NavigationBar
                        tintColor={NavTintColor}
                        title={titleConfig}
                        leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                    <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
                        DrawerLayoutAndroid示例
                    </Text>
                    <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
                        左边屏幕右滑滑出菜单
                    </Text>
                </DrawerLayoutAndroid>
        );
    }
}