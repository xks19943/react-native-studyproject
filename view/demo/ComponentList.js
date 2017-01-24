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
import AlertDemo from '../component/AlertDemo';
import ClipboardDemo from '../component/ClipboardDemo';
import DatePickerDemo from '../component/DatePickerDemo';
import DimensionDemo from '../component/DimensionDemo';
import DeviceEventEmitterDemo from '../component/DeviceEventEmitterDemo';
import DrawerLayoutDemo from '../component/DrawerLayoutDemo';
import LayoutAnimationDemo from '../component/LayoutAnimationDemo';
import LinkDemo from '../component/LinkDemo';
import ListViewDemo from '../component/ListViewDemo';
import ModalDemo from '../component/ModalDemo';
import NetInfoDemo from '../component/NetInfoDemo';
import PickerDemo from '../component/PickerDemo';
import PixelPatioDemo from '../component/PixelPatioDemo';
import ProgressBarDemo from '../component/ProgressBarDemo';
import PullToRefreshDemo from '../component/PullToRefreshDemo';
import PropsDemo from '../component/PropsDemo';
import SliderDemo from '../component/SliderDemo';
import SwitchDemo from '../component/SwitchDemo';
import TimerDemo from '../component/TimerDemo';
import ToastAndroidDemo from '../component/ToastAndroidDemo';
import ToolBarAndroidDemo from '../component/ToolBarAndroidDemo';
import VibrationDemo from '../component/VibrationDemo';
import ViewPagerDemo from '../component/ViewPagerDemo';
import WebViewDemo from '../component/WebViewDemo';
import SectionListDemo from '../component/SectionListVIew';
import GridViewDemo from '../component/GridViewDemo';

import ChannelView from '../my/ChannelView';

let data = [
    {name:'Alert', component:AlertDemo},
    {name:'Clipboard', component:ClipboardDemo},
    {name:'DatePickerAndroid', component:DatePickerDemo},
    {name:'Dimension', component:DimensionDemo},
    {name:'DeviceEventEmitter', component:DeviceEventEmitterDemo},
    {name:'DrawerLayoutAndroid', component:DrawerLayoutDemo},
    {name:'LayoutAnimation', component:LayoutAnimationDemo},
    {name:'Linking', component:LinkDemo},
    {name:'ListView', component:ListViewDemo},
    {name:'Modal', component:ModalDemo},
    {name:'NetInfo', component:NetInfoDemo},
    {name:'Picker', component:PickerDemo},
    {name:'PixelPatio', component:PixelPatioDemo},
    {name:'ProgressBarAndroid', component:ProgressBarDemo},
    {name:'PulltoRefresh', component:PullToRefreshDemo},
    {name:'Props', component:PropsDemo},
    {name:'Slider', component:SliderDemo},
    {name:'Switch', component:SwitchDemo},
    {name:'Timer', component:TimerDemo},
    {name:'ToastAndroid', component:ToastAndroidDemo},
    {name:'ToolBarAndroid', component:ToolBarAndroidDemo},
    {name:'Vibration', component:VibrationDemo},
    {name:'ViewPager', component:ViewPagerDemo},
    {name:'WebView', component:WebViewDemo},
    {name:'SectionListVIew', component:SectionListDemo},
    {name:'GridView', component:GridViewDemo},
    {name:'ChannelView', component:ChannelView},
];

export default class ComponentList extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(data),
        }
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(rowData){
        return(
            <ItemCell
                icon={{uri:'http://img5.duitang.com/uploads/item/201504/17/20150417H5529_JuTGY.thumb.224_0.jpeg'}}
                children={rowData.name}
                showDisclosureIndicator={true}
                onPress={()=>this.pressItem(rowData)}/>
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