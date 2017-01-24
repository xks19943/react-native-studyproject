/**
 * Created by liaoye on 2016/11/23.
 */
import React,{Component}from 'react';

import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    PropTypes,
    requireNativeComponent,
    NativeModules,
    ScrollView,
    StyleSheet,
    InteractionManager
} from 'react-native'

import JPushModule from 'jpush-react-native';
const receiveCustomMsgEvent = "receivePushMsg";
const receiveNotificationEvent = "receiveNotification";
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';
import JPushSettingTest from './JPushSettingTest';

export default class JPushTest extends Component{

    constructor(props) {
        super(props);

        this.state = {
            bg: '#ffffff',
            appkey: 'AppKey',
            imei: 'IMEI',
            package: 'PackageName',
            deviceId: 'DeviceId',
            version: 'Version',
            pushMsg: 'PushMessage',
            registrationId: 'registrationId',
        };

        this.jumpSetActivity = this.jumpSetActivity.bind(this);
        this.onInitPress = this.onInitPress.bind(this);
        this.onStopPress = this.onStopPress.bind(this);
        this.onResumePress = this.onResumePress.bind(this);
        this.onGetRegistrationIdPress = this.onGetRegistrationIdPress.bind(this);
    }

    jumpSetActivity() {
        let navigator = this.props.navigator;
        InteractionManager.runAfterInteractions(function () {
            navigator && navigator.push({
                component:JPushSettingTest,
            })
        })
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    onInitPress() {
        JPushModule.initPush();
    }

    onStopPress() {
        JPushModule.stopPush();
        console.log("Stop push press");
    }

    onResumePress() {
        JPushModule.resumePush();
        console.log("Resume push press");
    }

    onGetRegistrationIdPress() {
        JPushModule.getRegistrationID((registrationId) => {
            console.log(registrationId)
            this.setState({registrationId: registrationId});
        });
    }

    componentWillMount() {
        JPushModule.getInfo((map) => {
            this.setState({
                appkey: map.myAppKey,
                imei: map.myImei,
                package: map.myPackageName,
                deviceId: map.myDeviceId,
                version: map.myVersion
            });
        });

    }

    componentDidMount() {
        JPushModule.addReceiveCustomMsgListener((message) => {
            this.setState({pushMsg: message});
        });
        JPushModule.addReceiveNotificationListener((map) => {
            console.log("alertContent: " + map.alertContent);
            console.log("extras: " + map.extras);
            // var extra = JSON.parse(map.extras);
            // console.log(extra.key + ": " + extra.value);
        });
        JPushModule.addReceiveOpenNotificationListener((map) => {
            console.log("Opening notification!");
            this.props.navigator.push({name: "pushActivity"});
        })
    }

    componentWillUnmount() {
        JPushModule.removeReceiveCustomMsgListener(receiveCustomMsgEvent);
        JPushModule.removeReceiveNotificationListener(receiveNotificationEvent);
    }

    render() {
        let NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor: '#ffffff',
        };

        return (
            <View style={{flex:1}}>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>

                <ScrollView style = { styles.parent }>

                    <Text style = { styles.textStyle }>
                        { this.state.appkey }
                    </Text>
                    <Text style = { styles.textStyle }>
                        { this.state.imei }
                    </Text>
                    <Text style  = { styles.textStyle }>
                        { this.state.package }
                    </Text>
                    <Text style = { styles.textStyle }>
                        { this.state.deviceId }
                    </Text>
                    <Text style = { styles.textStyle }>
                        { this.state.version }
                    </Text>
                    <TouchableHighlight
                        underlayColor = '#0866d9'
                        activeOpacity = { 0.5 }
                        style = { styles.btnStyle }
                        onPress = { this.jumpSetActivity }>
                        <Text style = { styles.btnTextStyle }>
                            SETTING
                        </Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor = '#0866d9'
                        activeOpacity = { 0.5 }
                        style = { styles.btnStyle }
                        onPress = { this.onInitPress }>
                        <Text style = { styles.btnTextStyle }>
                            INITPUSH
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = '#e4083f'
                        activeOpacity = { 0.5 }
                        style = { styles.btnStyle }
                        onPress = { this.onStopPress }>
                        <Text style = { styles.btnTextStyle }>
                            STOPPUSH
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = '#f5a402'
                        activeOpacity = { 0.5 }
                        style = { styles.btnStyle }
                        onPress = { this.onResumePress }>
                        <Text style = { styles.btnTextStyle }>
                            RESUMEPUSH
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor = '#f5a402'
                        activeOpacity = { 0.5 }
                        style = { styles.btnStyle }
                        onPress = { this.onGetRegistrationIdPress }>
                        <Text style = { styles.btnTextStyle }>
                            GET REGISTRATIONID
                        </Text>
                    </TouchableHighlight>
                    <Text style = { styles.textStyle }>
                        { this.state.pushMsg }
                    </Text>
                    <Text style = {styles.textStyle} >
                        { this.state.registrationId }
                    </Text>
                </ScrollView>

            </View>
        )
    }
}

var styles = StyleSheet.create({
    parent: {
        padding: 15,
        backgroundColor: '#f0f1f3'
    },

    textStyle: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#808080'
    },

    btnStyle: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#3e83d7',
        borderRadius: 8,
        backgroundColor: '#3e83d7'
    },
    btnTextStyle: {
        textAlign: 'center',
        fontSize: 25,
        color: '#ffffff'
    },
    inputStyle: {
        borderColor: '#48bbec',
        borderWidth: 1,

    },
});