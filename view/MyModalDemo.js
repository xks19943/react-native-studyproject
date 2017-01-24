/**
 * Created by liaoye on 2016/9/2.
 */
import React,{Component} from 'react';
import {
    View,
    Modal,
    ToastAndroid,
    Text
} from 'react-native'
import CustomButton from './component/CustomButton';
export default class MyModalDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            modalVisible: false,
        };
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    showToast(){
        ToastAndroid.show('关闭了Modal',ToastAndroid.LONG)
    }

    render(){
        return(
            <View>
                <Modal
                    animationType={'slide'}   //动画效果
                    visible={this.state.modalVisible} //控制是否显示
                    transparent={true}
                    onRequestClose={()=>this.showToast}
                >
                    <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                        <CustomButton text={'关闭Modal'} onPress={this._setModalVisible.bind(this, false)}/>

                    </View>

                </Modal>
                <CustomButton text={'打开Modal'} onPress={this._setModalVisible.bind(this, true)}/>
                <Text>{this.state.modalVisible?'打开了Modal':'关闭了modal'}</Text>
            </View>
        );
    }
}