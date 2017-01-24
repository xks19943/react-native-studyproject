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
    TouchableOpacity,
    PixelRatio
} from 'react-native';
import NavigationBar from 'react-native-navbar'
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';

import StatusBars from '../component/StatusBars';
import NewCustomerView from './NewCustomerView';

export default class ChannelView extends Component{

    toDetailView(componentName){
        let weakThis = this;
        InteractionManager.runAfterInteractions(()=>{
            weakThis.props.navigator &&  weakThis.props.navigator.push({
                component:componentName
            })
        })
    }

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
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <View style={styles.line}/>

                <TouchableOpacity onPress={this.toDetailView.bind(this,NewCustomerView)}>
                    <View style={styles.item}>
                        <Image source={require('../../images/home_focus.png')} style={{width:24,height:24}}/>
                        <View style={{flex:1, marginHorizontal:10}}>
                            <Text style={{fontSize:15,color:'#333333'}}>
                                {'新增下游客户'}
                            </Text>
                            <Text style={{fontSize:13,color:'#888888', marginTop:10}}>
                                {'添加自己新的下游客户'}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:5}}>
                    <View style={[styles.item]}>
                        <Image source={require('../../images/home_focus.png')} style={{width:24,height:24}}/>
                        <View style={{flex:1, marginHorizontal:10}}>
                            <Text style={{fontSize:15,color:'#333333'}}>
                                {'客户等级设置'}
                            </Text>
                            <Text style={{fontSize:13,color:'#888888', marginTop:10}}>
                                {'不同的客户可以有不同的等级'}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#ffff',
        paddingVertical:10,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center'
    },
    line:{
        height:2/PixelRatio.get(),
        backgroundColor:'#cccccc'
    }
})