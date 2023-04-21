import { View, Text, ScrollView } from 'react-native';
import 'intl';
import { Linking, RefreshControl } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import BackButton from '../../../components/BackButton';

import EmbeddedLink from '../../../components/EmbeddedLink';
import { useEffect, useState, useCallback } from 'react';

const parseDateTime = (datetime) => {
    const date = new Date(
        typeof datetime == 'string' ? datetime.replace(/\-/g, '/') : datetime
    );

    const month = date.toLocaleDateString('en-us', {
        month: 'long',
    });

    const dayNum = date.getDate();

    const time = date
        .toLocaleTimeString()
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');

    return `${month} ${dayNum}${
        new Date().getFullYear() !== date.getFullYear()
            ? ', ' + date.getFullYear()
            : ''
    } at ${time}`;
};

const parseVideoLinks = (content) => {
    const embeddedVideoLinks = []
    var words = content.trim().split(/\s+/);
    words.forEach(word => {
        if (word.startsWith("https://uncch.hosted.panopto.com")){
            embeddedVideoLinks.push(word)
        }
    });
    return embeddedVideoLinks
}

const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};

const ContentScreen = ({ route, navigation }) => {
    const { title, content, datetime } = route.params;
    const embeddedVideoLinks = parseVideoLinks(content)
    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1500).then(() => setRefreshing(false));
    });

    return (
        <View style={[{ paddingTop: 56 }, { paddingBottom: 8 }]}>
            <BackButton navigation={navigation} />
            <ScrollView
                style={{
                    paddingHorizontal: 24,
                    marginBottom: 0,
                }}
                contentContainerStyle={{ paddingBottom: 50 }}
                alwaysBounceVertical={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: '#4B9CD3',
                        paddingBottom: 8,
                    }}
                >
                    {title}
                </Text>
                {datetime && (
                    <Text
                        style={{
                            paddingVertical: 8,
                            fontSize: 20,
                            color: 'gray',
                        }}
                    >
                        {parseDateTime(datetime)}
                    </Text>
                )}
                <Hyperlink
                    onPress={(url) => Linking.openURL(url)}
                    linkStyle={{ color: '#2980b9', fontSize: 20 }}
                >
                    <Text style={{ paddingVertical: 8, fontSize: 20 }}>
                        {content}
                    </Text>
                </Hyperlink>
                {embeddedVideoLinks ? embeddedVideoLinks.map((videoLink) => <EmbeddedLink videoLink={videoLink} refreshing={refreshing} key={videoLink}/>) : ""}
            </ScrollView>
        </View>
    );
};

export default ContentScreen;
