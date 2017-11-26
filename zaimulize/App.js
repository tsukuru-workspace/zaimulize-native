/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import HomeScreen from './src/components/homeScreen/index';
import TrendScreen from './src/components/trendScreen/index';
import SearchHistroyScreen from './src/components/searchHistoryScreen/index';
import TimelyNewsScreen from './src/components/timelyNewsScreen/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootTabs = TabNavigator({
   Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
        },
   },
    Trend: {
      screen: TrendScreen,
        navigationOptions: {
            tabBarLabel: 'トレンド',
        },
    },
    SearchHistory: {
        screen: SearchHistroyScreen,
        navigationOptions: {
            tabBarLabel: '検索履歴',
        },
    },
    TimelyNewsScreen: {
        screen: TimelyNewsScreen,
        navigationOptions: {
            tabBarLabel: '適時開示',
        },
    },
});

export default RootTabs;