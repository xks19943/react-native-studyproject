/**
 * Created by liaoye on 2017/1/9.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    InteractionManager,
    PixelRatio,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import NavigationBar from 'react-native-navbar'
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import RightButton from '../component/RightButton';
import InputItem from './InputItem';

export default class NewCustomerView extends Component{

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    render(){
        let titleConfig = {
            title: '渠道管理',
            tintColor:'#333333',
            style:{fontSize:17}
        };
        return(
            <View style={{flex:1}}>
                <StatusBars/>
                <NavigationBar
                    tintColor={'#ffffff'}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}
                    rightButton={<RightButton text={'保存'}/>}/>
                <View style={styles.line}/>

                <ScrollView style={{flex:1}}>
                    <InputItem title={'公司名称'}/>
                    <View style={styles.line}/>
                    <InputItem title={'联系人'}/>
                    <View style={styles.line}/>
                    <InputItem title={'联系人电话'} keyboardType={'numeric'}/>
                    <View style={styles.line}/>
                    <InputItem title={'联系人地址'}/>
                    <View style={styles.line}/>
                    <InputItem title={'选择类型'}/>
                    <View style={styles.line}/>
                    <InputItem title={'交易账号'}/>

                    <View style={{marginTop:10, paddingHorizontal:15, flexDirection:'row'}}>
                        <Text style={{fontSize:13,color:'#888888'}}>{'剩余交易账户名额：0个'}</Text>
                        <TouchableOpacity style={{marginLeft:10}}>
                            <Text style={{fontSize:13,color:'#0090ff'}}>{'去交易'}</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{marginTop:47.5, alignSelf:'center'}}>
                        <View style={{width:310, height:40, backgroundColor:'#0090ff', borderRadius:5, justifyContent:'center'}}>
                            <Text style={{textAlign:'center',color:'#ffffff', fontSize:13}}>
                                {'新增客户'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    line:{
        height:2/PixelRatio.get(),
        backgroundColor:'#cccccc'
    }
})