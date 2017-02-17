import React, {Component} from 'react';
import { Animated, View, Text, StyleSheet ,Image} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

/**
 * Created by marno on 2017/1/16
 * Desc:
 */

export default class BottomTabViewTest extends Component {
    static title = 'Bottom bar with indicator';
    static appbarElevation = 4;

    static propTypes = {
        style: View.propTypes.style,
    };

    state = {
        index: 0,
        routes: [
            { key: '1', title: 'First', icon: '../../imgs/ic_home.png' },
            { key: '2', title: 'Second', icon: '../../../imgs/ic_yaomeirong.png' },
            { key: '3', title: 'Third', icon: '../../../imgs/ic_shop.png' },
        ],
    };

    _handleChangeTab = (index) => {
        this.setState({
            index,
        });
    };

    _renderIndicator = (props) => {
        const { width, position } = props;

        const translateX = Animated.multiply(position, width);

        return (
            <Animated.View
                style={[ BottomTabViewStyle.container, { width, transform: [ { translateX } ] } ]}
            >
                <View style={BottomTabViewStyle.indicator} />
            </Animated.View>
        );
    };

    _renderIcon = ({ route }: any) => {
        return (
            <Image source={route.icon} style={{height:24,width:24,}}/>
        );
    };

    _renderBadge = ({ route }) => {
        if (route.key === '2') {
            return (
                <View style={BottomTabViewStyle.badge}>
                    <Text style={BottomTabViewStyle.count}>42</Text>
                </View>
            );
        }
        return null;
    };

    _renderFooter = (props) => {
        return (
            <TabBar
                {...props}
                renderIcon={this._renderIcon}
                renderBadge={this._renderBadge}
                renderIndicator={this._renderIndicator}
                style={BottomTabViewStyle.tabbar}
                tabStyle={BottomTabViewStyle.tab}
            />
        );
    };

    _renderScene = ({ route }) => {
        switch (route.key) {
            case '1':
                return <View style={[ BottomTabViewStyle.page,
                    { backgroundColor: '#ff4081' } ]} />;
            case '2':
                return <View style={[ BottomTabViewStyle.page,
                    { backgroundColor: '#673ab7' } ]} />;
            case '3':
                return <View style={[ BottomTabViewStyle.page,
                    { backgroundColor: '#4caf50' } ]} />;
            default:
                return null;
        }
    };

    render() {
        return (
            <TabViewAnimated
                style={[ BottomTabViewStyle.container, this.props.style ]}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderFooter={this._renderFooter}
                onRequestChangeTab={this._handleChangeTab}
            />
        );
    }
}

const BottomTabViewStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#222',
    },
    tab: {
        padding: 0,
    },
    icon: {
        backgroundColor: 'transparent',
        color: 'white',
    },
    indicator: {
        flex: 1,
        backgroundColor: '#0084ff',
        margin: 4,
        borderRadius: 2,
    },
    badge: {
        marginTop: 4,
        marginRight: 32,
        backgroundColor: '#f44336',
        height: 24,
        width: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    count: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: -2,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});