
'use strict';
import React, {PropTypes, Component } from 'react';

import { View, Text, Image, TouchableHighlight,TouchableOpacity, StyleSheet, PixelRatio }
    from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

const IC_GREY_BORDER_COLOR = '#C8C7CC'

/**
 * 仿IOS 默认cell样式
 */
export default class ItemCell extends React.Component {

    static propTypes = {
        ...TouchableOpacity.propTypes,
        children: PropTypes.string.isRequired,
        showDisclosureIndicator: PropTypes.bool,
        icon: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.shape({
                uri: PropTypes.string,
            }),
        ]),
    }

    _renderDisclosureIndicator () {
        if (this.props.showDisclosureIndicator) {
            return (
                <Icon
                    style={styles.chevron}
                    color={this.props.chevronColor || IC_GREY_BORDER_COLOR}
                    name='angle-right' size={22}
                />
            )
        }
    }

    _renderIcon () {
        if (this.props.icon) {
            return (
                <View style={styles.iconContainer}>
                    <View style={styles.paddingView} />
                    <Image style={styles.icon}
                           source={this.props.icon}
                           resizeMode='contain'
                    />
                    <View style={styles.paddingView} />
                </View>
            )
        }
        return <View style={styles.paddingView} />
    }

    render () {
        let touchableProps = {
            accessible: this.props.accessible,
            delayLongPress: this.props.delayLongPress,
            delayPressIn: this.props.delayPressIn,
            delayPressOut: this.props.delayPressOut,
            onLongPress: this.props.onLongPress,
            onPress: this.props.onPress,
            onPressIn: this.props.onPressIn,
            onPressOut: this.props.onPressOut,
        }
        return (
            <TouchableOpacity {...touchableProps}
                underlayColor='#D9D9D9'
                style={styles.container}>
                <View style={styles.viewContainer}>
                    <View style={styles.leftContainer}>
                        {this._renderIcon()}
                    </View>
                    <View style={styles.bottomBorder}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                {this.props.children}
                            </Text>
                            {this._renderDisclosureIndicator()}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#C8C7CC',
        borderStyle: 'solid',
        height:60,
    },
    leftContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
    bottomBorder: {
        flex: 1,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#C8C7CC',
        borderStyle: 'solid',
    },
    paddingView: {
        width: 15,
        backgroundColor: 'white',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 18,
        alignSelf: 'center',
    },
    chevron: {
        width: 25,
        paddingRight: 15,
        color: '#C8C7CC',
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    iconContainer: {
        alignItems: 'center',
        width: 59,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 2,
        resizeMode:Image.resizeMode.contain,
    },
});