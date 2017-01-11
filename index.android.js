/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, {Component} from "react";
import {AppRegistry, Text, Image, View, StyleSheet, TextInput, ScrollView, ListView, Navigator} from "react-native";
import SecondScene from "./SecondScene";
import TabNavigator from "react-native-tab-navigator";

/**
 * ==================================================
 * 【1.1 Helllo world】
 * ==================================================
 */
class HelloWorld extends Component {
    render() {
        return (<Text>Hello Wolrd!!</Text>)
    }
}

/**
 * ==================================================
 * 【1.2 更多控件】显示图片
 * ==================================================
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
 * ==================================================
 * 【2.1 prop属性】 - 自定义控件
 * ==================================================
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
 * ==================================================
 * 【2.2 state状态】- 闪烁的文字
 * ==================================================
 */
//自定义控件
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        //每1000毫秒对showText的状态做一次取反操作
        setInterval(
            ()=> {
                this.setState({showText: !this.state.showText});
            }, 500
        );
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
 * ==================================================
 * 【3.1 样式】- 创建样式
 * ==================================================
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
const styles = StyleSheet.create(
    {
        bigblue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
        },
        red: {
            color: 'red',
        },
    }
);
/**
 * ==================================================
 * 【3.2 组件的宽高】- 指定宽高和弹性宽高
 * ==================================================
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
 * ==================================================
 * 【3.3 FlexBox的使用】- 强大的FlexBox布局
 * ==================================================
 */
class FlexBoxTest extends Component {
    render() {
        return (<View style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
            <View style={{width: 50, height: 120, backgroundColor: 'skyblue'}}/>
            <View style={{width: 50, height: 80, backgroundColor: 'steelblue'}}/>
        </View>)
    }
}
/**
 * ==================================================
 * 【4.1 TextInput处理文本输入】- 监听输入长度
 * ==================================================
 */
class CountTextLength extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (<View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder="请输入"
                onChangeText={(text)=> {
                    this.setState({text})
                }}
            />

            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.length}
            </Text>
        </View>);
    }
}
/**
 * ==================================================
 * 【5.1 滚动视图的使用一】 - ScrollView的简单使用
 * ==================================================
 */
class ScrollViewTest extends Component {
    render() {
        let pic = {uri: 'https://www.baidu.com/img/bd_logo1.png'}
        return (<ScrollView>
            <Text style={scrollStyle.text}>这是第一组图片</Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.text}>这是第二组图片</Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.text}>这是第三组图片</Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
            <Text style={scrollStyle.line}></Text>
            <Image source={pic} style={scrollStyle.image}/>
        </ScrollView>)
    }
}

const scrollStyle = StyleSheet.create(
    {
        image: {
            width: 200,
            height: 100,
            alignSelf: 'center',
            backgroundColor: 'white'
        },
        text: {
            width: window.width,
            fontSize: 30,
            alignSelf: 'center',
            backgroundColor: 'powderblue'
        },
        line: {
            height: 1,
            backgroundColor: 'gray'
        }
    }
)

/**
 * ==================================================
 * 【5.2 滚动视图的使用二】 - ListView的简单使用
 * ==================================================
 */
class ListViewDemo extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['Jhon', '王五', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Jhon', '王五', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Jhon', '王五', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'])
        };
    }

    render() {
        return (<View style={{flex: 1, paddingTop: 22}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData)=><Text style={scrollStyle.text}>{rowData}</Text>}
            />
        </View>)
    }
}
/**
 * ===================================================
 * 【6.1 网络请求】 -使用Fetch发起网络请求
 * ===================================================
 */
function getShopList() {
    const url = 'http://120.25.102.194/index.php/api/shop/shopList';
    return fetch(url)
        .then((response)=>response.json())
        .then(
            (responseJson)=> {
                var shop = responseJson.data.shop;
                for (let item of shop) {
                    console.log(item);
                }
                // console.log(shop);
                return shop;
            }
        )
        .catch(
            (error)=> {
                console.error(error);
            }
        )
}

class FetchNetData extends Component {
    render() {
        return (<View >
            <Text onPress={
                ()=> getShopList()
            } style={{backgroundColor: 'blue', fontSize: 30}}>点我获取网络数据</Text>
        </View>)
    }
}
/**
 * ===================================================
 * 【7.1 页面跳转】 - 使用Navigator进行页面跳转
 * ===================================================
 */

class NavigationTest extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title: '我的页面', index: 0}}
                renderScene={(route, navigator)=>
                    <SecondScene
                        title={route.title}

                        //按下前进时，页面索引递增
                        onForward={()=> {
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: '第' + nextIndex + '个页面',
                                index: nextIndex,
                            });
                        }}

                        //按下返回时如果页面索引大于0，就将当前场景出栈
                        onBack={()=> {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        )
    }
}
/**
 * ===================================================
 * 【8.1 三方UI库使用】
 * ===================================================
 */
class TabNavigatorTest extends Component {
    render() {

        let pic = {uri: './imgs/tab_explore.png'};

        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="Home"
                    renderIcon={() => <Image source={pic}/>}
                    renderSelectedIcon={() => <Image source={pic}/>}
                >
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Profile"
                    renderIcon={() => <Image source={pic}/>}
                    renderSelectedIcon={() => <Image source={pic}/>}
                >
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Home"
                    renderIcon={() => <Image source={pic}/>}
                    renderSelectedIcon={() => <Image source={pic}/>}
                >
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Profile"
                    renderIcon={() => <Image source={pic}/>}
                    renderSelectedIcon={() => <Image source={pic}/>}
                >
                </TabNavigator.Item>
            </TabNavigator>)
    }
}
/**
 * ===================================================
 * 【9.1 获取屏幕宽高】
 * ===================================================
 */
var Dimensions = require('Dimensions');//加载Dimensions模块
let PixelRatio = require('PixelRatio'); // 加载PixelRatio模块
//获取屏幕宽度,单位PT,单位不是实际的物理像素,而是逻辑像素, 类似于Android中dp或者ios中点
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height; //获取屏幕高度
let pixelRatio = PixelRatio.get(); // 获取屏幕密度, 1PT等于多少实际像素

class GetScreenDimens extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['Jhon', '王五', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Jhon', '王五', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Jhon', '王五', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'])
        };
    }

    render() {
        console.log('测试打印日志');
        console.log('totalWidth = ' + totalWidth);
        console.log('totalHeight = ' + totalHeight);
        console.log('pixelRatio = ' + pixelRatio);

        return (<View >
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData)=>
                    <Text style={itemStyle.item}>
                        {rowData}
                    </Text>
                }
            />
        </View>)
    }
}
const itemStyle = StyleSheet.create({
    item: {
        width: totalWidth,
        fontSize: 30,
        alignSelf: 'center',
        backgroundColor: 'powderblue'
    }
})

/**
 * ===================================================
 * 【10.1 布局练习】
 * ===================================================
 */
class LayoutTest extends Component {
    render() {

        return (
            <View style={LayoutTestStyle.container}>
                <Image source={require('./imgs/me.png')} style={LayoutTestStyle.image}/>
                <Text style={LayoutTestStyle.text}>这里是简单的文字这里是简单的文字这里是简单的文字</Text>
            </View>
        )
    }
}

var LayoutTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#05A5D1",
        flexDirection: "row",
        padding: 10,
        alignItems: "flex-start"
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
        resizeMode: "cover"
    },
    text: {
        fontSize: 20,
        paddingLeft: 16
    }
});


AppRegistry.registerComponent('HelloWorld', () => LayoutTest);