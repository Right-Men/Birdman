/**
 *
 *
 *
 *
 * */
'use strict';

import React,{Component} from 'react';

import {
    View,
    Image,
    BackAndroid,
    StatusBar,
    Navigator,

} from 'react-native';

import Splash from '../pages/Splash';

import {NavigatorGoBack} from '../utils/NavigatorGoBack';
var tempNavigator;

export default class App extends Component{

    // 构造
    constructor(props) {
        super(props);
        this.configureScene = this.configureScene.bind(this);
        this.renderScene = this.renderScene.bind(this);
        this.goBack = this.goBack.bind(this);
        //android物理返回键
        BackAndroid.addEventListener('hardwareBackPress',this.goBack);
    }
    //物理返回键
    goBack(){
        return NavigatorGoBack(tempNavigator);
    };

    configureScene(){
        return Navigator.SceneConfigs.PushFromRight;//默认
    };
    renderScene(route,navigator){
        let Component = route.component;
        tempNavigator = navigator;
        return(
            <Component navigator={navigator} route={route}/>
        );
    };



    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor='transparent'
                    style={{height:25}}
                />
                <Navigator
                    ref='navigator'
                    style={{flex:1}}
                    renderScene={this.renderScene}
                    configureScene={this.configureScene}
                    initialRoute={{
                        component:Splash,
                        name:'Splash'
                    }}
                />
            </View>

        );
    };






};








