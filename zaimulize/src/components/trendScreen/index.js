/* @flow */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import TrendListScreen from './list';
import TrendInfoScreen from './info';

const TrendScreen = StackNavigator({
    List: {screen: TrendListScreen},
    Info: {screen: TrendInfoScreen},
});

export default TrendScreen;