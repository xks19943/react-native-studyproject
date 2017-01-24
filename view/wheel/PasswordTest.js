/**
 * Created by liaoye on 2016/12/28.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';
import Password from '../PasswordInput';

export default class PasswordTest extends Component{
    constructor(props){
        super(props);
        this.state={
            password:'',
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
                <Password maxLength={6}
                          style={{width:45*6, alignSelf:'center'}}
                        onChange={(val)=>this.setState({password:val})}/>
                <Text style={{fontSize:16,alignSelf:'center'}}>{this.state.password}</Text>
            </View>
        );
    }
}