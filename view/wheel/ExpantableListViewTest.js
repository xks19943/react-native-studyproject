/**
 * Created by liaoye on 2016/12/28.
 */
import React,{Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';
import MenuList from '../MenuList';
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';
import Data from '../json/data.json';

export default class ExpantableListViewTest extends Component{

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
            <View style={{flex:1}}>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <MenuList data={Data.sections}/>
            </View>
        );
    }
}