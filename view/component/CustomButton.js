/**
 * Created by liaoye on 2016/8/4.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

export default class CustomButton extends Component {
    render() {
        return (
            <TouchableOpacity
                accessible={this.props.accessible}
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor: '#5bb588',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    buttonText:{
        color:'#fff',
    },
});