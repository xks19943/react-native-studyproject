/**
 * Created by liaoye on 2016/8/22.
 */
import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class LeftButton extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={{justifyContent:'center',alignItems:'center', marginLeft: 16,flex: 1}}>
                    <Icon name="angle-left" color="#333333" size={35}/>
                </View>
            </TouchableOpacity>
        );
    }
}