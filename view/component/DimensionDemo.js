/**
 * Created by liaoye on 2016/8/16.
 * 学习使用Dimensions api
 */
import React,{Component} from 'react';
import{
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export  default class DimensionsDemo extends Component {
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
                <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
                    屏幕信息示例
                </Text>
                <Text style={styles.instructions}>
                    当前屏幕宽度:+{Dimensions.get('window').width};
                </Text>
                <Text style={styles.instructions}>
                    当前屏幕高度:'+{Dimensions.get('window').height};
                </Text>
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
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});