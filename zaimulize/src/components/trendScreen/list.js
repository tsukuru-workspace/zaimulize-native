/* @flow */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
} from 'react-native';

class TrendListScreen extends Component {
    constructor() {
        super();
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <FlatList
                key={"companyList"}
                data={[
                    {name: '株式会社インベスターズクラウド1'},
                    {name: '株式会社インベスターズクラウド2'},
                    {name: '株式会社インベスターズクラウド3'},
                    {name: '株式会社インベスターズクラウド4'},
                ]}
                renderItem={({item}) =>
                        <View>
                            <Text onPress={() => navigate("Info")}>{item.name}</Text>
                        </View>
                }
            />
        );
    }
}

export default TrendListScreen;