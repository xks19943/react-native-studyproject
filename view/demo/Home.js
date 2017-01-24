/**
 * Created by liaoye on 2016/10/2.
 */
import React,{Component} from 'react';
import {
    View,
    ListView,
    StatusBar,
} from 'react-native';

import ScrollableTabView,{ ScrollableTabBar,DefaultTabBar } from 'react-native-scrollable-tab-view';
import NavigationBar from 'react-native-navbar';
import StyleUtil from '../util/StyleUtil';
import ComponentList from './ComponentList';
import WheelList from './WheelList';
import StatusBars from '../component/StatusBars';

export default  class Home extends Component{

    render(){
        let NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor:'#ffffff',
        };
        return(
            <View style={{flex:1}}>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}/>
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={()=>
                        <DefaultTabBar backgroundColor={'#fff'} textStyle={{fontSize:16}}
                                       activeTextColor={NavTintColor} underlineStyle={{backgroundColor:NavTintColor}}/>
                    }
                    tabBarPosition={'top'}>
                    <ComponentList tabLabel={"组件"} navigator={this.props.navigator}/>
                    <WheelList tabLabel={"轮子"} navigator={this.props.navigator}/>
                </ScrollableTabView>
            </View>
        );
    }
}