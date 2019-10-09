import React, {Component} from 'react';
import { SafeAreaView, View,ScrollView } from 'react-native';
import TopNavigation from './TopNavigation';
import { ListItem } from 'react-native-elements';

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://pbs.twimg.com/profile_images/1154004892127830016/v3rzoMWs_400x400.jpg',
        subtitle: '1 New Message',
        messageFlag: true,
        onlineFlag: false,
        lastMessage: "just now"
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://pbs.twimg.com/profile_images/1091030027188297729/beuyvz2J_400x400.jpg',
        subtitle: 'I will call you on...',
        messageFlag: false,
        onlineFlag: true,
        lastMessage: "3 minutes"
    },
    {
        name: 'Amy Farha',
        avatar_url: 'https://pbs.twimg.com/profile_images/943735942224867329/Jkmyj3b9_400x400.jpg',
        subtitle: 'How about this datasets?',
        messageFlag: false,
        onlineFlag: true,
        lastMessage: "1 hour"
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://pbs.twimg.com/profile_images/1107863828459675648/JcqBJR4x_400x400.jpg',
        subtitle: 'Checking the final bug...',
        messageFlag: false,
        onlineFlag: false,
        lastMessage: "2 days"
    }
]

class Home extends Component {


    render() {
        return (
            <SafeAreaView>
                <TopNavigation currentScreen={'home'}/>
                <ScrollView showsVerticalScrollIndicator={false} style={{
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingTop: 10,
                    top: -50,
                    height: '100%',
                    backgroundColor: '#FFFFFF'
                }}>
                    {
                        list.map((l, i) => (
                            (l.onlineFlag) ?
                            <ListItem
                                key={i}
                                subtitleStyle={[{color: '#717171'},(l.messageFlag) ? {fontWeight: 'bold', color: '#F64037'} : '']}
                                containerStyle={{borderRadius: 50}}
                                rightSubtitle={l.lastMessage}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                                badge={{status: 'success', badgeStyle: { width: 12, height: 12, borderRadius: 50, position: 'absolute', left: -300, top: 10 }}}
                                badgeStyle={{position: 'absolute'}}
                                bottomDivider
                            /> :
                            <ListItem
                                key={i}
                                subtitleStyle={[{color: '#717171'},(l.messageFlag) ? {fontWeight: 'bold', color: '#F64037'} : '']}
                                containerStyle={{borderRadius: 50}}
                                rightSubtitle={l.lastMessage}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                                bottomDivider
                            />

                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}
export default Home
