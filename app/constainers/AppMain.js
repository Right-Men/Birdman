/**
 *
 *      tabBar
 *
 *
 *
 * */
'use strict';
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator'; //第三方TabBar框架

import HomeConstainer from './HomeConstainer';//首页
import RecommendConstainer from './RecommendConstainer';//推荐
import PlanConstainer from './PlanConstainer';//计划
import MineConstainers from './MineConstainer';//个人


export default class AppMain extends Component{

// 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
        selected:'home'
    };
  }



    render(){
        return(
            <View style={{flex:1,}}>
                <TabNavigator
                    tabBarStyle={{backgroundColor:'#f2f2f2'}}>
                    {/*首页*/}
                    <TabNavigator.Item
                        title="首页"
                        selected={this.state.selected === 'home'}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        titleStyle={styles.titleStyle}
                        renderIcon={() => <Image source={require('../imgs/tabbar/ic_tab_home.png')} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require('../imgs/tabbar/ic_tab_home_selected.png')} style={styles.iconStyle} />}
                        onPress={() => this.setState({selected:'home'})}>
                        <HomeConstainer {...this.props} />
                    </TabNavigator.Item>
                    {/*推荐*/}
                    <TabNavigator.Item
                        title="推荐"
                        selected={this.state.selected === 'recommend'}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        titleStyle={styles.titleStyle}
                        renderIcon={() => <Image source={require('../imgs/tabbar/ic_tab_classification.png')} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require('../imgs/tabbar/ic_tab_classification_selected.png')} style={styles.iconStyle} />}
                        onPress={() => this.setState({selected:'recommend'})}>
                        <RecommendConstainer {...this.props} />
                    </TabNavigator.Item>
                    {/*计划*/}
                    <TabNavigator.Item
                        title="计划"
                        selected={this.state.selected === "plan"}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        titleStyle={styles.titleStyle}
                        renderIcon={() => <Image source={require('../imgs/tabbar/ic_tab_favorites.png')} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require('../imgs/tabbar/ic_tab_favorites_selected.png')} style={styles.iconStyle} />}
                        onPress={() => this.setState({selected:'plan'})}>
                        <PlanConstainer {...this.props} />
                    </TabNavigator.Item>
                    {/*个人*/}
                    <TabNavigator.Item
                        title="个人"
                        selected={this.state.selected === "mine"}
                        selectedTitleStyle={styles.selectedTitleStyle}
                        titleStyle={styles.titleStyle}
                        renderIcon={() => <Image source={require('../imgs/tabbar/ic_tab_mime.png')} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={require('../imgs/tabbar/ic_tab_mine_selected.png')} style={styles.iconStyle} />}
                        onPress={() => this.setState({selected:'mine'})}>
                        <MineConstainers {...this.props} />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    };
};


const styles = StyleSheet.create({

    selectedTitleStyle:{
        color:'black'

    },
    titleStyle:{
        color:'#999'
    },
    iconStyle:{
        width:26,
        height:26
    },


});


