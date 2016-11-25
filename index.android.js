/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, {Component} from "react";
import {AppRegistry, Text, Image, View, StyleSheet} from "react-native";
/**
 * ==============================
 * 【1.1 Hello world】
 * ==============================
 */
class HelloWorld extends Component {
    render() {
        return (<Text>Hello Wolrd!!</Text>)
    }
}

/**
 * ==============================
 * 【1.2 更多控件】显示图片
 * ==============================
 */
class ImageTest extends Component {
    render() {
        let pic = {uri: 'https://www.baidu.com/img/bd_logo1.png'};
        return (
            <Image source={pic} style={{width: 193, height: 110, alignSelf: 'center'}}/>
        )
    }
}

/**
 * ==============================
 * 【2.1 prop属性】 - 自定义控件
 * ==============================
 */
//自定义控件
class Greeting extends Component {
    render() {
        return (<Text>Hello {this.props.name}</Text>)
    };
}
//使用自定义控件
class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='张三'/>
                <Greeting name='王五'/>
                <Greeting name='赵六'/>
                <Greeting name='朱启'/>
            </View>
        )
    }
}

/**
 * ==============================
 * 【2.2 state状态】- 闪烁的文字
 * ==============================
 */
//自定义控件
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        //每1000毫秒对showText的状态做一次取反操作
        setInterval(()=> {
            this.setState({showText: !this.state.showText});
        }, 500);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (<Text >{display}</Text>)
    };
}
//使用自定义控件
class BlinkApp extends Component {
    render() {
        return (<View style={{alignItems: 'center'}}>
            <Blink text='这里是一句中文'/>
            <Blink text='I love to blink'/>
            <Blink text='Yes blinking is so great'/>
            <Blink text='Why did they ever take this out of HTML'/>
            <Blink text='Look at me look at me look at me'/>
        </View>)
    }
}
/**
 * ==============================
 * 【3.1 样式】- 创建样式
 * ==============================
 */
class ManyStyles extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue,ten red</Text>
            </View>
        )
    }
}
//控件的样式都是通过StyleSheet.create()方法来创建
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
/**
 * ==============================
 * 【3.2 组件的宽高】- 指定宽高和弹性宽高
 * ==============================
 */
//指定宽高
class FixedDimensTest extends Component {
    render() {
        return (<View>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
            <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}}/>
            <View style={{width: 150, height: 50, backgroundColor: 'steelblue'}}/>
        </View>)
    }
}
//弹性宽高
class FlexableDimensTest extends Component {
    render() {
        // 试试去掉父View中的`flex: 1`。
        // 则父View不再具有尺寸，因此子组件也无法再撑开。
        // 然后再用`height: 300`来代替父View的`flex: 1`试试看？
        return (<View style={{height: 300}}>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
            <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
            <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
        </View>)
    }
}
/**
 * ==============================
 * 【3.3 FlexBox的使用】- 强大的FlexBox布局
 * ==============================
 */
class FlexBoxTest extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems:'center',
        }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
            <View style={{width: 50, height: 120, backgroundColor: 'skyblue'}}/>
            <View style={{width: 50, height: 80, backgroundColor: 'steelblue'}}/>
        </View>)
    }
}

AppRegistry.registerComponent('HelloWorld', () => FlexBoxTest);