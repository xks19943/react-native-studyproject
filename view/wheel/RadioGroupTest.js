/**
 * Created by liaoye on 2016/8/4.
 * rediobutton的学习（react-native-radio-buttons）
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import RadioButtons from 'react-native-radio-buttons';
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';

export default class RadioGroupTest extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedOption:false,
        }
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    render() {
        const options = [
            "American",
            "Australian",
            "British",
        ];

        let NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor:'#ffffff',
        };

        function renderOption( option, selected, onSelect, index) {

            const textStyle = {
                paddingTop: 10,
                paddingBottom: 10,
                color: 'black',
                flex: 1,
                fontSize: 14,
            };
            const baseStyle = {
                flexDirection: 'row',
            };
            var style;
            var checkMark;

            if (index > 0) {
                style = [baseStyle, {
                    borderTopColor: '#eeeeee',
                    borderTopWidth: 1,
                }];
            } else {
                style = baseStyle;
            }

            if (selected) {
                checkMark = <Image
                                source={require('./../../images/choice1.png')}
                                style={{width:30, height:30, marginLeft:20}}
                                resizeMode={'stretch'}/>
            }else{
                checkMark = <Image
                                source={require('./../../images/choice2.png')}
                                style={{width:30, height:30, marginLeft:20}}
                                resizeMode={'stretch'}/>
            }

            return (
                <TouchableWithoutFeedback onPress={onSelect} key={index}>
                    <View style={style}>
                        {checkMark}
                        <Text style={textStyle}>{option}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        }

        function renderContainer(options){
            return (
                <View style={{
                    backgroundColor: 'white',
                    paddingLeft: 20,
                    borderTopWidth: 1,
                    borderTopColor: '#cccccc',
                    borderBottomWidth: 1,
                    borderBottomColor: '#cccccc',
                    alignItems:'center'
                }}>
                    {options}
                </View>
            );
        }

        return (
            <View>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>

                <View style={{marginTop: 10, backgroundColor: 'white'}}>
                    <Text style={{padding: 20, fontWeight:'bold'}}>VerticalSelect</Text>

                    <View style={{
                        backgroundColor: '#eeeeee',
                        paddingTop: 5,
                        paddingBottom: 5,
                    }}>
                        <Text style={{
                            color: '#555555',
                            paddingLeft: 20,
                            marginBottom: 5,
                            marginTop: 5,
                            fontSize: 12,
                        }}>ACCENT</Text>
                        <RadioButtons
                            options={ options }
                            onSelection={(selectedOption)=>this.setState({selectedOption:selectedOption})}
                            selectedOption={ this.state.selectedOption }
                            renderOption={ renderOption }
                            renderContainer={ renderContainer }
                        />
                    </View>
                    <Text style={{
                        margin: 20,
                    }}>Selected accent: {this.state.selectedOption || 'none'}</Text>
                </View>
            </View>
        );
    }
}