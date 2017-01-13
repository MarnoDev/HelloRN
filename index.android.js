/**
 * Created by marno on 2017/1/13.
 * Desc:程序入口
 */
'use strict'
import React from "react";
import {AppRegistry} from "react-native";
// import HelloWorld from "./app/helloworld_demo/HelloWorld";
// import FlexTest from "./app/flex_demo/FlexTest";
// import FlexDiceTest from "./app/flex_demo/FlexDiceTest";
// import FetchNetData from "./app/fetch_demo/FetchNetData";
import BannerTest from './app/library_demo/BannerTest';

// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
// AppRegistry.registerComponent('HelloWorld', ()=>FlexTest);
// AppRegistry.registerComponent('HelloWorld', () => FlexDiceTest);
// AppRegistry.registerComponent('HelloWorld', () => FetchNetData);
AppRegistry.registerComponent('HelloWorld', ()=>BannerTest);