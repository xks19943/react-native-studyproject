/**
 * Created by liaoye on 2016/10/2.
 */

import React,{Component} from 'react';
import {
    Navigator,
    BackAndroid,
    View
} from 'react-native';

import Splash from './demo/Splash';
let tempNavigator;
export default class App extends Component{

    constructor(props){
        super(props);
        let weakthis = this;
        //添加监听返回键 按下返回键到上一个页面
        BackAndroid.addEventListener('hardwareBackPress',function () {
            if(tempNavigator && tempNavigator.getCurrentRoutes().length>1){
                tempNavigator.pop();
                return true;
            }
            return false;
        })
    }

    routeManager(route,navigator){
        let Component = route.component;
        tempNavigator = navigator;
        return (
            <View style={{flex: 1,flexDirection: 'column',}}>
                <Component {...route.params} {...route} navigator={tempNavigator}  />
            </View>
        );
    }

    render(){
        return(
            <Navigator
                style={{flex:1, flexDirection:'column'}}
                //配置默认路由
                initialRoute={{
                    component:Splash,
                }}
                //配置动画和手势
                configureScene={()=>Navigator.SceneConfigs.FloatFromBottom}
                
                //要传递的路由和参数等
                renderScene={this.routeManager.bind(this)}
            />
        );
    }
}