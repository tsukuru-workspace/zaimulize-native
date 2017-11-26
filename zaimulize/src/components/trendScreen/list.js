/* @flow */
import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    FlatList
} from 'react-native';

class TrendListScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.searchArea}>
                    <TextInput placeholder={"証券コードまたは企業名を入力"} style={styles.searchTextInput}></TextInput>
                </View>
                <View style={styles.body}>
                    <Text style={styles.title}>トレンド検索</Text>
                    <View style={styles.filter}>
                        <Text>すべての業種</Text>
                    </View>
                    <View style={styles.list}>
                        <FlatList
                            key={"companyList"}
                            data={[
                                {key: '株式会社インベスターズクラウド1'},
                                {key: '株式会社インベスターズクラウド2'},
                                {key: '株式会社インベスターズクラウド3'},
                                {key: '株式会社インベスターズクラウド4'},
                            ]}
                            renderItem={({item}) =>
                                    <View style={styles.listItem}>
                                        <Text style={styles.ListItemRank}>1位</Text>
                                        <Text onPress={() => navigate("Info")} style={styles.ListItemCompany}>{item.key}</Text>
                                    </View>
                            }
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchArea: {
        padding: 10,
        backgroundColor: '#66f3ff',
    },
    searchTextInput: {
        height: 30,
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    title: {
        flexGrow: 1,
        fontSize: 18,
        color: '#66f3ff',
    },
    filter: {
        flexGrow: 1,
    },
    list: {
        flexGrow: 14,
    },
    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#070d09',
        flexDirection: 'row',
    },
    ListItemRank: {
        flexGrow: 1,
        fontSize: 11,
    },
    ListItemCompany: {
        flexGrow: 5,
        fontSize: 13,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
    }
});

export default TrendListScreen;