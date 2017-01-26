/**
 * Created by marno on 2017/1/25
 * Function:全局的数据存储辅助类
 * Desc:
 */
import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    // defaultExpires: 1000 * 3600 * 24 * 30,
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,
});

//导出为全局变量
global.storage = storage;