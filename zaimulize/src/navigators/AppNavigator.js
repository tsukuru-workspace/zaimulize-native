import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import HomeScreen from '../components/homeScreen/index';
import TrendScreen from '../components/trendScreen/index';
import SearchHistoryScreen from '../components/searchHistoryScreen/index';
import TimelyNewsScreen from '../components/timelyNewsScreen/index';

export const AppNavigator = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={focused ?
                            require('../assets/tab/ico-tab-home-on.png') :
                            require('../assets/tab/ico-tab-home.png')}
                    />
                ),
            },
        },
        Trend: {
            screen: TrendScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={focused ?
                            require('../assets/tab/ico-tab-trend-on.png') :
                            require('../assets/tab/ico-tab-trend.png')}
                    />
                ),
            },
        },
        SearchHistory: {
            screen: SearchHistoryScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={focused ?
                            require('../assets/tab/ico-tab-search-history-on.png') :
                            require('../assets/tab/ico-tab-search-history.png')}
                    />
                ),
            },
        },
        TimelyNewsScreen: {
            screen: TimelyNewsScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) => (
                    <Image
                        source={
                            focused ?
                            require('../assets/tab/ico-tab-timely-news-on.png') :
                            require('../assets/tab/ico-tab-timely-news.png')
                        }
                    />
                ),
            },
        },
    },
    {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
        },
    }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);