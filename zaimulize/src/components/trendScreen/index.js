/* @flow */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TrendListScreen from './list';
import TrendInfoScreen from './info';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const TrendScreen = StackNavigator({
    List: {screen: TrendListScreen},
    Info: {screen: TrendInfoScreen},
});


export default TrendScreen;