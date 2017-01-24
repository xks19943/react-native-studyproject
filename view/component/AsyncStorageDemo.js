/**
 * Created by liaoye on 2016/8/16.
 * 学习使用AsyncStorage API  用于键值对的增删查
 */
import React,{Component} from 'react';
import {
    Text,
    AsyncStorage,
    View,
    StyleSheet,
} from 'react-native';
import CustomButton from './CustomButton'

var STORAGE_KEY_ONE = '@AsyncStorageDemo:key_one';
var STORAGE_KEY_MESSAGE = '@AsyncStorageDemo:key_message';

export default class AsyncStorageDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            messages:[],
        };
    }

    componentDidMount() {
        this.getStorageData();
    }
    //获取到存储中的数据
    async getStorageData(){
        try{
            var values = await AsyncStorage.getItem(STORAGE_KEY_ONE);
            if(values!=null){
                this.appendMessage('从存储中获取到数据为:'+values);
            }else{
                this.appendMessage('存储中无数据,初始化为空数据');
            }
        }catch (error){
                this.appendMessage(('AsyncStorage错误'+error.message));
        }
    }

    //存储数据
    async saveValue(){
        try{
            await AsyncStorage.setItem(STORAGE_KEY_ONE,'心痛宝强，宝宝心里苦!');
            this.appendMessage('保存到存储的数据为:'+'心痛宝强，宝宝心里苦!');
        }catch(error){
            this.appendMessage('AsyncStorage错误'+error.message);
        }
    }

    //删除对应的存储数据
    async removeValue(){
        try{
            await AsyncStorage.removeItem(STORAGE_KEY_ONE);
            this.appendMessage('数据删除成功...');
        }catch(error){
            this.appendMessage('AsyncStorage错误'+error.message);
        }
    }

    //进行把message信息添加到messages数组中
    appendMessage(message){
        this.setState({messages:this.state.messages.concat(message)});
    }

    render(){
        return(
            <View>
                <Text style={styles.welcome}>
                    AsyncStorage使用实例
                </Text>
                <CustomButton text='点击存储数据' onPress={this.saveValue}/>
                <CustomButton text='点击删除数据' onPress={this.removeValue}/>
                <Text style={styles.content}>信息为:</Text>
                {this.state.messages.map((m,i) => <Text style={styles.content} key={i}>{m}</Text>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 14,
        textAlign: 'left',
        margin: 10,
    },
    content:{
        fontSize: 13,
        textAlign: 'left',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});
