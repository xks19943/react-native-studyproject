/**
 * Created by liaoye on 2017/1/9.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

export default class InputItem extends Component{
    render(){
        return(
            <View style={{flexDirection: 'row',height:44,paddingHorizontal:15, backgroundColor:'#ffffff', alignItems:'center'}}>
                <Text style={{fontSize:15, color:'#333333',flex:1}}>{this.props.title}</Text>
                <TextInput
                    style={{fontSize:15, color:'#888888',flex:2, marginLeft:10, paddingVertical:5}}
                    defaultValue={this.props.content}
                    onChangeText={this.props.onChangeText}
                    keyboardType={this.props.keyboardType}
                    underlineColorAndroid={'transparent'}/>
            </View>
        );
    }
}