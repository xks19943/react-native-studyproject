/**
 * Created by liaoye on 2016/8/3.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';

export default class RadioButtonTest extends Component{
    constructor(){
        super();
        this.state = {
            types: [{label: '快递运输', value: 0}, {label: '自己拿货', value: 1}],
            value: '',
            valueIndex: ''};
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

                   <View style={styles.row}>
                       <Text style={{fontSize:20,color:'#000'}}>请选择配送方式</Text>
                   </View>
                    <RadioForm
                        radio_props={this.state.types}
                        initial={this.state.value}
                        animation={true}
                        onPress={(value, index) => {
                            this.setState({value:value})
                            this.setState({valueIndex:index})
                        }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    radio:{
        flexDirection:'column',
        padding:10,
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
    }
})