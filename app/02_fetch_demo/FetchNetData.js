import React, {Component} from "react";
import {
    Text,
    Image,
    View,
    StyleSheet,
    ToastAndroid,

}from 'react-native';

/**
 * Created by marno on 2017/1/13.
 * Desc:从网络获取数据，并展示到UI上
 */
export default class FetchNetData extends Component {
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
                    ToastAndroid.show(responseJson.msg, ToastAndroid.SHORT)
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
            <Text style={{textAlign: "center", fontSize: 16, padding: 20}}>加载中...</Text>
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
