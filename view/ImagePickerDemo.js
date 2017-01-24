/**
 * Created by liaoye on 2016/8/11.
 * 选择添加图片的grideview
 */

import React,{Component} from 'react';
import {
    View,
    Image,
    ListView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

var imgSource= [
    require('./../images/add4.png')
];

export default class ImagePickerDemo extends Component{

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(imgSource)
        };
    }

    pressItem(rowID){
        if(rowID == 0){
            this.selectPhotoTapped();
        }
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            //console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                var source;

                // You can display the image using either: , isStatic: true
                source = {uri: 'data:image/jpeg;base64,' + response.data};

                // Or:
                // if (Platform.OS === 'android') {
                //   source = {uri: response.uri, isStatic: true};
                // } else {
                //   source = {uri: response.uri.replace('file://', ''), isStatic: true};
                // }
                var index = imgSource.length-1;

                //往数组指定位置添加图片的路径
                //imgSource.splice(index,0,source);
                //console.log(imgSource.toString());

                imgSource.push(source);
               /* ToastAndroid.show(source.uri,ToastAndroid.LONG);*/
               /* console.log(source.uri);*/

                this.setState({dataSource:this.state.dataSource.cloneWithRows(imgSource)})
            }
        });
    }


    rowResouce(rowData, sectionID, rowID){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.pressItem(rowID)}>
                    <Image style={styles.thumb} source={rowData}
                            resizeMode={'stretch'}/>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#efeff4'}}>
                <ListView
                    dataSource={this.state.dataSource}
                    contentContainerStyle={styles.list}
                    renderRow={this.rowResouce.bind(this)}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    thumb:{
        width:window.width/3-10,
        height:window.height/4-10,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    container: {
        width: window.width / 3,
        height: window.height / 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
