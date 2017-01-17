/**
 * Created by marno on 2017/1/13.
 * Desc:程序入口
 */
'use strict'
import React, {Component} from "react";
import {AppRegistry} from "react-native";

// import HelloWorld from "./app/helloworld_demo/HelloWorld";
// import FlexTest from "./app/flex_demo/FlexTest";
// import FlexDiceTest from "./app/flex_demo/FlexDiceTest";
// import FetchNetData from "./app/fetch_demo/FetchNetData";
// import BannerTest from './app/library_demo/BannerTest';
// import TopTabViewTest from './app/library_demo/tab_demo/TopTabViewTest';
// import BottomTabViewTest from './app/library_demo/tab_demo/BottomTabViewTest'
// import TaberTest from './app/library_demo/tab_demo/TaberTest'
// import AnatomyTest from './app/nativebase_demo/AnatomyTest';
// import ScrollViewTest from './app/scroll_demo/ScrollViewTest'
import VideoItem from './app/scroll_demo/VideoListItem';

// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
// AppRegistry.registerComponent('HelloWorld', ()=>FlexTest);
// AppRegistry.registerComponent('HelloWorld', () => FlexDiceTest);
// AppRegistry.registerComponent('HelloWorld', () => FetchNetData);
// AppRegistry.registerComponent('HelloWorld', () => BannerTest);
// AppRegistry.registerComponent('HelloWorld', ()=>TopTabViewTest);
// AppRegistry.registerComponent('HelloWorld', ()=>BottomTabViewTest);
// AppRegistry.registerComponent('HelloWorld', ()=>TaberTest);
// AppRegistry.registerComponent('HelloWorld', ()=>AnatomyTest);
// AppRegistry.registerComponent('HelloWorld', ()=>ScrollViewTest);
AppRegistry.registerComponent('HelloWorld', ()=>VideoItem);
