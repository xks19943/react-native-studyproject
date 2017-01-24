/**
 * Created by liaoye on 2016/8/29.
 *
 * 学习使用react-native-tab-navigator开源库
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';

export default class TabNavigatorTest extends Component{

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    constructor(props){
        super(props);
        this.state={selectedTab:'home'}
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
            <View style={{flex: 1}}>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <TabNavigator tabBarStyle={styles.tab}>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            renderIcon={() => <Image style={styles.tabIcon} source={require('./../../images/home_normal.png')}/>}
                            renderSelectedIcon={()=> <Image style={styles.tabIcon} source={require('./../../images/home_focus.png')}/>}
                            onPress={()=>this.setState({selectedTab:'home'})}>
                                {TabNavigatorTest._createChildView('home')}
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'person'}
                            renderIcon={()=><Image style={styles.tabIcon} source={require('./../../images/personal_normal.png')}/>}
                            renderSelectedIcon={()=> <Image style={styles.tabIcon} source={require('./../../images/personal_focus.png')}/>}
                            onPress={()=>this.setState({selectedTab:'person'})}>
                                {TabNavigatorTest._createChildView('person')}
                        </TabNavigator.Item>
                </TabNavigator>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});