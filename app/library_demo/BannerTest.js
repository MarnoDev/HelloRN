import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import Banner from "react-native-banner";

/**
 * Created by marno on 2017/1/13.
 */

export default class BannerTest extends Component {
    constructor(props) {
        super(props);

        this.banners = [
            {
                title: 'beauty 1',
                image: 'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
            },
            {
                title: 'beauty 2',
                image: 'http://img1.3lian.com/2015/a1/53/d/200.jpg',
            },
            {
                title: 'The next banner has no title',
                image: 'http://img1.3lian.com/2015/a1/53/d/198.jpg',
            },
            {
                // title: 'no title',
                image: 'http://image.tianjimedia.com/uploadImages/2012/235/9J92Z5E5R868.jpg',
            },
        ];

        this.state = {
            clickTitle: 'You can try clicking beauty',
            defaultIndex: 0,
        }
        this.defaultIndex = 0;
    }

    render() {
        return (
            <View style={styles.container}>
                <Banner
                    banners={this.banners}
                    defaultIndex={this.defaultIndex}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                    intent={this.clickListener.bind(this)}
                />
                <Text>{this.state.clickTitle}</Text>
            </View>
        );
    }

    clickListener(index) {
        this.setState({
            clickTitle: this.banners[index].title ? `you click ${this.banners[index].title}` : 'this banner has no title',
        })
    }

    onMomentumScrollEnd(event, state) {
        console.log(`--->onMomentumScrollEnd page index:${state.index}, total:${state.total}`);
        this.defaultIndex = state.index;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
