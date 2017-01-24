/**
 * Created by liaoye on 2016/8/1.
 * 学习react-native-picker的使用
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';
import Picker from 'react-native-picker';
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';
import Area from '../json/area.json';


export default class PickerTest extends Component{

    constructor(props) {
        super(props);
        this.state = {
            date:'',
            area:'',
        };
    }

    createDate(){
        let date = [];
        for(let i=1950;i<2050;i++){
            let month = [];
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                let _month = {};
                _month[j+'月'] = day;
                month.push(_month);
            }
            let _date = {};
            _date[i+'年'] = month;
            date.push(_date);
        }
        return date;
    };

    createArea(){
        let data = [];
        let len = Area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=Area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[Area[i]['city'][j]['name']] = Area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[Area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    };

    selectDate() {
        let dateData = this.createDate();
        let weakThis = this;
        Picker.init({
            pickerData: dateData,
            onPickerConfirm: pickedArr => {
                console.log(pickedArr);
                weakThis.setState({date:pickedArr[0] + pickedArr[1] + pickedArr[2]});
            },
            onPickerCancel: pickedValue => {
                console.log(pickedValue);
            },
            onPickerSelect: pickedValue => {
                console.log(pickedValue);
            }
        });
        Picker.show();
    }


    selectArea(){
        let areaData = this.createArea();
        let weakThis = this;
        Picker.init({
            pickerData: areaData,
            onPickerConfirm: pickedArr => {
                weakThis.setState({area:pickedArr[0] + pickedArr[1] + pickedArr[2]});
            },
            onPickerCancel: pickedValue => {
                console.log(pickedValue);
            },
            onPickerSelect: pickedValue => {
                console.log(pickedValue);
            }
        });
        Picker.show();
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
                <View style={styles.container}>
                    <TextInput style={{flex:1}}
                               placeholder={'请选择时间'}
                               editable={false}
                               defaultValue={this.state.date}/>
                    <TouchableOpacity style={styles.text} onPress={this.selectDate.bind(this)}>
                        <Text style={{textAlign:'center', color:'#fff'}}>点我选择</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TextInput style={{flex:1}}
                               placeholder={'请选择地址'}
                               editable={false}
                               defaultValue={this.state.area}/>
                    <TouchableOpacity style={styles.text} onPress={this.selectArea.bind(this)}>
                        <Text style={{textAlign:'center', color:'#fff'}}>点我选择</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'row'
    },
    text: {
        backgroundColor:'#31c2f7',
        width:60,
        height:40,
        justifyContent:'center',
    }
})