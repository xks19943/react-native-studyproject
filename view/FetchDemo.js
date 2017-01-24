/**
 * Created by liaoye on 2016/8/18.
 * 学习使用fetch来访问网络获取数据并且解析数据
 */
import React,{Component} from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

export default class FetchDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            area:'',
            sex:'',
            birthday:'',
        };
    }

    async toSearch() {
        try {
            let response = await fetch('http://apis.juhe.cn/idcard/index?cardno='+this.state.id+'&dtype=json&key=10fe791004ea8137a12c915407291779');
            let responseJson = await response.json();
            console.log(responseJson);
            if(responseJson.resultcode == '200'){
                this.setState({
                    area:responseJson.result.area,
                    sex:responseJson.result.sex,
                    birthday:responseJson.result.birthday
                });
            }else{
                ToastAndroid.show(responseJson.reason,ToastAndroid.LONG);
            }
        } catch(error) {
            console.error(error);
        }
    }


    toQueryString(obj){
        //    encodeURIComponent(key)
        return obj ? Object.keys(obj).sort().map(function (key) {
            var val = obj[key];
            if (Array.isArray(val)) {
                return val.sort().map(function (val2) {
                    return  key+ '=' +val2;
                }).join('&');
            }
            return  key+ '=' + val;
        }).join('&') : '';
    }


    render() {
        return(
            <View style={{backgroundColor:'#efeff4',flex:1,padding:10}}>
                <View style={styles.row}>
                    <TextInput style={{fontSize:20,flex:1}}
                               underlineColorAndroid={'#3142f5'}
                               placeholder={'请输入身份证号码'}
                               onChangeText={(value)=>this.setState({id:value})}/>
                    <TouchableOpacity style={{width:120,backgroundColor:'#3142f5',height:40, justifyContent:'center'}} onPress={this.toSearch.bind(this)}>
                        <View>
                            <Text style={{fontSize:20, color:'#fff', textAlign:'center'}}>搜索</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'#ccc', height:1,width:360,marginLeft:10, marginRight:10}}/>
                <View style={[styles.row, style = {justifyContent:'space-around'}]}>
                    <Text style={styles.text}>地址</Text>
                    <Text style={styles.text}>{this.state.area}</Text>
                </View>
                <View style={{backgroundColor:'#ccc', height:1,width:360,marginLeft:10, marginRight:10}}/>
                <View style={[styles.row, style = {justifyContent:'space-around'}]}>
                    <Text style={styles.text}>性别</Text>
                    <Text style={styles.text}>{this.state.sex}</Text>
                </View>
                <View style={{backgroundColor:'#ccc', height:1,width:360,marginLeft:10, marginRight:10}}/>
                <View style={[styles.row, style = {justifyContent:'space-around'}]}>
                    <Text style={styles.text}>出生日期</Text>
                    <Text style={styles.text}>{this.state.birthday}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    row:{
        height:50,
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        fontSize:20,
        color:'#000',
    }
});