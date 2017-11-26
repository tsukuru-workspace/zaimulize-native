/* @flow */
import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList
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
                    {key: '株式会社インベスターズクラウド1'},
                    {key: '株式会社インベスターズクラウド2'},
                    {key: '株式会社インベスターズクラウド3'},
                    {key: '株式会社インベスターズクラウド4'},
                ]}
                renderItem={({item}) =>
                    <View>
                        <Text onPress={() => navigate("Info")}>{item.key}</Text>
                    </View>
                }
            />
        );
    }
}

export default TrendListScreen;