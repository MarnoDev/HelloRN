/**
 * Created by marno on 2017/2/10
 * Function:视频播放页面
 * Desc:
 */
import React, {Component} from 'react';
import {Text, Navigator, StyleSheet, View} from 'react-native';
import {
    Container, Header, Title, Content, Button, Icon, Left, Body
} from "native-base";
import JsonUtil from '../../utils/JsonUtil';
import Video from 'react-native-video';

export default class VideoPlayPage extends Component {
    constructor(props) {
        super(props);
        //注意，如果不进行bind，是拿不到传递过来的默认属性的
        this._onBackPress = this._onBackPress.bind(this);
    }

    render() {
        return (
           <View style={{flex:1,backgroundColor:'black'}}>
               <Video source={{uri: this.props.rowData.playUrl}}   // Can be a URL or a local file.
                      ref={(ref) => {
                          this.player = ref
                      }}                             // Store reference
                      rate={1.0}                     // 0 is paused, 1 is normal.
                      volume={1.0}                   // 0 is muted, 1 is normal.
                      muted={false}                  // Mutes the audio entirely.
                      paused={false}                 // Pauses playback entirely.
                      resizeMode="contain"             // Fill the whole screen at aspect ratio.
                      repeat={false}                  // Repeat forever.
                      playInBackground={false}       // Audio continues to play when app entering background.
                      playWhenInactive={false}       // [iOS] Video continues to play when control or notification center are shown.
                      progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
                      style={styles.backgroundVideo}/>
           </View>
        )
    }

    _onBackPress() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});