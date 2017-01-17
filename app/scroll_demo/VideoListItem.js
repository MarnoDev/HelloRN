/**
 * Created by marno on 2017/1/17
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, Image, Text, Dimensions} from "react-native";

export default class VideoListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoModel: {
                title: '这里显示标题',
                playUrl: '',
                imgUrl: 'http://source.51yrz.com/1466071007.jpg?imageView2/1/w/600/h/300',
            }
        }
    }


    render() {
        return (
            <Image style={VideoListItemStyle.image_bg} source={{uri: this.props.imgUrl}}>
                <Text style={VideoListItemStyle.title}>{this.props.title}</Text>
            </Image>
        )
    }
}
const screenWidth = Dimensions.get('window').width;

const VideoListItemStyle = StyleSheet.create({
    image_bg: {
        height: 200,
        resizeMode: "cover",
    },
    title: {
        width: screenWidth,
        flex:1,
        backgroundColor: "#000000CC",
        textAlignVertical: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize:16,
    }
})
