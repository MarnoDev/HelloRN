/**
 * Created by marno on 2016/11/26.
 */
import React, {Component, PropTypes} from "react";
import {View, Text, TouchableHighlight} from "react-native";

export default class SecondScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    render() {
        return (
            <View>
                <Text>当前页面：{this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>点我进入下个页面</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>点我返回上一页面</Text>
                </TouchableHighlight>
            </View>
        )
    }
}