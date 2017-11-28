/* @flow */
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Badge } from 'native-base';
import {
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
        const {navigate} = this.props.navigation;
        var data = [
            {key: '株式会社インベスターズクラウド1'},
            {key: '株式会社インベスターズクラウド2'},
            {key: '株式会社インベスターズクラウド3'},
            {key: '株式会社インベスターズクラウド4'},
            {key: '株式会社インベスターズクラウド4'},
            {key: '株式会社インベスターズクラウド4'},
            {key: '株式会社インベスターズクラウド4'},
            {key: '株式会社インベスターズクラウド4'},
        ];
        return (
            <Container>
                <Content style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>トレンド検索</Text>
                    </View>
                    <View style={styles.filter}>
                        <Text style={styles.filter_text}>すべての業種</Text>
                    </View>
                    <View>
                        <List dataArray={data}
                            renderRow={(item) =>
                                <ListItem style={styles.listItem}>
                                    <View style={styles.listItemRank}>
                                        <Badge style={styles.rank} info>
                                            <Text style={styles.rank_text}>1</Text>
                                        </Badge>
                                    </View>
                                    <View style={styles.listItemCompany}>
                                        <Text onPress={() => navigate("Info")} style={styles.company_name}>{item.key}</Text>
                                    </View>
                                </ListItem>
                            }>
                        </List>
                    </View>
                </Content>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
    },
    header: {
        marginBottom: 5,
        padding: 12,
    },
    filter: {
        padding: 12,
    },
    filter_text: {
        fontSize: 13,
    },
    title: {
        color: '#2ccaff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    listItem: {
        flex: 1,
    },
    listItemRank: {
        marginRight: 10,
    },
    listItemCompany: {

    },
    rank: {
    },
    rank_text: {
        fontSize: 10,
        alignItems: 'center',
    },
    company_name: {
        fontSize: 13,
    }

});

export default TrendListScreen;