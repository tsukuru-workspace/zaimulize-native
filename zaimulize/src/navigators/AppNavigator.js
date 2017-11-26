import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';

import HomeScreen from '../components/homeScreen/index';
import TrendScreen from '../components/trendScreen/index';
import SearchHistoryScreen from '../components/searchHistoryScreen/index';
import TimelyNewsScreen from '../components/timelyNewsScreen/index';

export const AppNavigator = TabNavigator({
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