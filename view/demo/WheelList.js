/**
 * Created by liaoye on 2016/10/2.
 */
import React,{Component} from 'react';
import {
    ListView,
    InteractionManager,
    View
} from 'react-native';

import ItemCell from '../component/ItemCell';
import DateTimePickerTest from '../wheel/DateTimePickerTest';
import CameraTest from '../wheel/CameraTest';
import CheckBoxTest from '../wheel/CheckBoxTest';
import ImagePickerTest from '../wheel/ImagePickerTest';
import JPushTest from '../wheel/JPushTest';
import PickerTest from '../wheel/PickerTest';
import RadioButtonTest from '../wheel/RadioButtonTest';
import RadioGroupTest from '../wheel/RadioGroupTest';
import TabNavigatorTest from '../wheel/TabNavigatorTest';
import ViewPagerTest from '../wheel/ViewPagerTest';
import WeChatTest from '../wheel/WeChatTest';
import ParallaxScrollViewTest from '../wheel/ParallaxScrollViewTest';
import SwipeListViewTest from '../wheel/SwipeListViewTest';
import ChartTest from '../wheel/ChartTest';
import PasswordTest from '../wheel/PasswordTest';
import ExpantableListViewTest from '../wheel/ExpantableListViewTest';

let data = [
    {name:'react-native-datetime', component:DateTimePickerTest},
    {name:'react-native-camera', component:CameraTest},
    {name:'react-native-checkbox', component:CheckBoxTest},
    {name:'react-native-image-picker', component:ImagePickerTest},
    {name:'jpush-react-native', component:JPushTest},
    {name:'react-native-picker', component:PickerTest},
    {name:'react-native-simple-radio-button', component:RadioButtonTest},
    {name:'react-native-radio-buttons', component:RadioGroupTest},
    {name:'react-native-tab-navigator', component:TabNavigatorTest},
    {name:'react-native-viewpager', component:ViewPagerTest},
    {name:'react-native-wechat', component:WeChatTest},
    {name:'react-native-parallax-scroll-view', component:ParallaxScrollViewTest},
    {name:'react-native-swipe-list-view', component:SwipeListViewTest},
    {name:'react-native-chart', component:ChartTest},
    {name:'react-native-passwordInput', component:PasswordTest},
    {name:'react-native-FoldList', component:ExpantableListViewTest},
]


export default class WheelList extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(data),

        }
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(rowData){
        return(
            <ItemCell
                icon={{uri:'http://img3.duitang.com/uploads/item/201503/28/20150328142234_Xf5Qf.thumb.224_0.jpeg'}}
                children={rowData.name}
                showDisclosureIndicator={true}
                onPress={()=>this.pressItem(rowData)}
            />
        )
    }


    pressItem(rowData) {
        let navigator = this.props.navigator;
        InteractionManager.runAfterInteractions(function () {
            navigator && navigator.push({
                component:rowData.component,
                name:rowData.name
            })
        })

    }

    render(){
        return(
            <View style={{flex:1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderItem}/>
            </View>
        );
    }
}