/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, {Component} from "react";
import {
    AppRegistry,
    Text,
    Image,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    ListView,
    Navigator,
    ToastAndroid
} from "react-native";
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
                style={{height: 80}}
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
class FetchNetData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: null
        };
    }
    //发起网络请求，获取数据
    fetchShopList() {
        const url = 'http://120.25.102.194/index.php/api/shop/shopList';
        fetch(url)
            .then((response)=>response.json())
            .then(
                (responseJson)=> {
                    var shop = responseJson.data.shop;
                    ToastAndroid.show(responseJson.msg, ToastAndroid.LONG)
                    var firstShop = shop[0];
                    console.log(firstShop);
                    this.setState({
                        shop: firstShop,
                    })
                }
            )
            .catch((error)=>console.error(error))
    }
    //页面渲染完成后会主动回调该方法
    componentDidMount() {
        this.fetchShopList();
    }

    //绘制界面
    render() {
        let item = this.state.shop;
        //这里需要判断网络请求完成与否，如果item为空时，会发生空指针
        if (item) {
            return this.renderItem(item);
        }
        return (
            <Text style={{textAlign:"center",fontSize:16,padding:20}}>加载中...</Text>
        )
    }

    //绘制展示数据的界面
    renderItem(item) {
        return (
            <View style={ShopItemStyle.container_out}>
                <Image style={ShopItemStyle.image_shopLogo} source={{uri: item.shop_logo}}/>
                <View style={ShopItemStyle.container_right}>
                    <Text style={ShopItemStyle.text_shopName}>{item.shop_name}</Text>
                    <Text style={ShopItemStyle.text_shopAddress}>{item.shop_address}</Text>
                </View>
            </View>
        )
    }
}

//网络请求按钮
const ShopItemStyle = StyleSheet.create({
    container_out: {
        backgroundColor: "white",
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    container_right: {
        flexDirection: "column",
        height: 80,
        flexGrow: 1,
    },
    image_shopLogo: {
        borderRadius: 80,
        width: 80,
        height: 80,
        resizeMode: "cover",
        marginHorizontal: 12
    },
    text_shopName: {
        color: "black",
        fontSize: 16,
        lineHeight: 24,
    },
    text_shopAddress: {
        color: "gray",
        fontSize: 12,
        lineHeight: 20,
    },
})
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

const LayoutTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#05A5D1",
        flexDirection: "row",
        padding: 10,
        alignItems: "flex-start"
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 80,
        resizeMode: "cover",
    },
    text: {
        fontSize: 20,
        paddingLeft: 16,
    }
});

/**
 * ===================================================
 * 【10.2 Flex练习】
 * ===================================================
 */
class FlexTest extends Component {
    render() {
        return (
            <View style={FlexTestStyle.container}>
                <Text style={FlexTestStyle.item}>1</Text>
                <Text style={FlexTestStyle.item}>2</Text>
                <Text style={FlexTestStyle.item}>3</Text>
                <Text style={FlexTestStyle.item}>4</Text>
                <Text style={FlexTestStyle.item_flex_end}>5</Text>
            </View>
        )
    }
}

const FlexTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "#0ff",
        flexDirection: "row",
        flex: 1,
    },
    item: {
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 4,
        height: 100,
    },
    item_flex_end: {
        backgroundColor: "#f0f",
        flexGrow: 1,//相当于Android控件中的weight属性
        margin: 4,
        height: 100,
        alignSelf: "flex-end",
    }
})

/**
 * ===================================================
 * 【10.3 Flex骰子布局练习】
 * ===================================================
 */
class FlexDiceTest extends Component {
    render() {
        return (
            <View style={FlexDiceTestStyle.container}>
                <Text style={FlexDiceTestStyle.item1}>1</Text>
                <Text style={FlexDiceTestStyle.item2}>2</Text>
                <Text style={FlexDiceTestStyle.item3}>3</Text>
                <Text style={FlexDiceTestStyle.item4}>4</Text>
                <Text style={FlexDiceTestStyle.item5}>5</Text>
                <Text style={FlexDiceTestStyle.item6}>6</Text>
                <Text style={FlexDiceTestStyle.item7}>7</Text>
                <Text style={FlexDiceTestStyle.item8}>8</Text>
                <Text style={FlexDiceTestStyle.item9}>9</Text>
            </View>
        )
    }
}

const FlexDiceTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 300,
        width: 300,
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    item1: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item2: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item3: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item4: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
        alignSelf: "flex-end"
    },
    item5: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item6: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item7: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item8: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item9: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    }
})

AppRegistry.registerComponent('HelloWorld', () => FetchNetData);