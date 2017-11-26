/**
 * @flow
 */
import React from 'react';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './src/components/homeScreen/index';
import TrendScreen from './src/components/trendScreen/index';
import SearchHistoryScreen from './src/components/searchHistoryScreen/index';
import TimelyNewsScreen from './src/components/timelyNewsScreen/index';

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
        screen: SearchHistoryScreen,
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