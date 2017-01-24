/**
 * Created by liaoye on 2017/1/10.
 */
import React,{Component} from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class RightButton extends Component{
    render(){
        return(
            <TouchableOpacity style={{marginHorizontal:16}} onPress={this.props.onPress}>
                <View style={{flex:1, justifyContent:'center'}}>
                    <Text style={{fontSize:15,color:'#333333'}}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
