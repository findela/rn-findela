import React, {Component} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import TopNavigation from './TopNavigation';
import { ListItem,Avatar } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

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
        name: 'Christy Jackson',
        avatar_url: 'https://pbs.twimg.com/profile_images/1091030027188297729/beuyvz2J_400x400.jpg',
        subtitle: 'I will call you on...',
        messageFlag: false,
        onlineFlag: true,
        lastMessage: "3 minutes"
    },
    {
        name: 'Diana Jamini',
        avatar_url: 'https://pbs.twimg.com/profile_images/943735942224867329/Jkmyj3b9_400x400.jpg',
        subtitle: 'How about this datasets?',
        messageFlag: false,
        onlineFlag: false,
        lastMessage: "1 hour"
    },
    {
        name: 'Melina Gates',
        avatar_url: 'https://i2.wp.com/myaeon.com.au/wp-content/uploads/2017/04/avatar-round-1.png?ssl=1',
        subtitle: 'Checking the final bug...',
        messageFlag: false,
        onlineFlag: true,
        lastMessage: "2 days"
    }
]

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            propsData : {
                navigation: "nav",
                text : 'Messages'
            }
        };
        this.getMessageDetails = this.getMessageDetails.bind(this);
    }

    getMessageDetails = (val,url) => {
        Actions.message({ text: val,image:url })
    };

    render() {
        return (
            <View>
                <TopNavigation currentScreen={this.state.propsData}/>
                <SafeAreaView style={{backgroundColor: '#fff'}}>
                    <View style={{height: 100,backgroundColor:'#FEF8E8', position: 'relative', top: -60, zIndex: 99, padding: 10, paddingLeft: 20}}>
                        <Text style={{fontSize: 12, marginBottom: 10, fontWeight: 'bold', color: '#717171'}}>People you may know</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex: 1, flexDirection: 'row'}}>
                            <Avatar rounded
                                    size="medium"
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: 'https://pbs.twimg.com/profile_images/860109032815697921/K8j9CLcw_400x400.jpg'}}
                            />
                            <Avatar rounded
                                    size="medium"
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: 'https://pbs.twimg.com/profile_images/995574392452247553/_mwPrHTO_400x400.jpg'}}
                            />
                            <Avatar rounded
                                    size="medium"
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: 'https://pbs.twimg.com/profile_images/975781930926071808/_I__o_wT_400x400.jpg'}}
                            />
                            <Avatar rounded
                                    size="medium"
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: 'https://pbs.twimg.com/profile_images/635519423734943744/0u_EnzZC_400x400.jpg'}}
                            />
                            <Avatar rounded
                                    size="medium"
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: 'https://pbs.twimg.com/profile_images/860109032815697921/K8j9CLcw_400x400.jpg'}}
                            />
                            <Avatar rounded
                                    size="medium"
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: 'https://pbs.twimg.com/profile_images/995574392452247553/_mwPrHTO_400x400.jpg'}}
                            />
                            <Avatar rounded
                                    size="medium"
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: 'https://pbs.twimg.com/profile_images/975781930926071808/_I__o_wT_400x400.jpg'}}
                            />
                            <Avatar rounded
                                    size="medium"
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: 'https://pbs.twimg.com/profile_images/635519423734943744/0u_EnzZC_400x400.jpg'}}
                            />
                        </ScrollView>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}
                        style={{
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            paddingTop: 0,
                            top: -60,
                            height: '100%',
                            backgroundColor: '#FFFFFF'
                        }}>
                        {
                            list.map((l, i) => (

                                <TouchableOpacity onPress={() => this.getMessageDetails(l.name,l.avatar_url)}>
                                    {
                                        (l.onlineFlag) ?
                                        <ListItem
                                            key={i}
                                            subtitleStyle={
                                                [{color: '#717171'}, (l.messageFlag) ? { fontWeight: 'bold', color: '#F64037'} : '']
                                            }
                                            containerStyle={
                                                [{borderRadius: 30}, (l.messageFlag) ? {backgroundColor: '#FFF'} : '']
                                            }
                                            rightSubtitle={l.lastMessage}
                                            rightSubtitleStyle={{position: 'relative', right: -15}}
                                            leftAvatar={{source: {uri: l.avatar_url}}}
                                            title={l.name}
                                            subtitle={l.subtitle}
                                            badge={{
                                                status: 'success',
                                                badgeStyle: {
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 50,
                                                    position: 'absolute',
                                                    left: -300,
                                                    top: 10
                                                }
                                            }}
                                            bottomDivider
                                        />
                                        :
                                        <ListItem
                                            key={i}
                                            onPress={() => this.getMessageDetails(l.name,l.avatar_url)}
                                            subtitleStyle={[{color: '#717171'}, (l.messageFlag) ? {
                                                fontWeight: 'bold',
                                                color: '#F64037'
                                            } : '']}
                                            containerStyle={[{borderRadius: 30}, (l.messageFlag) ? {backgroundColor: '#FFF'} : '']}
                                            rightSubtitle={l.lastMessage}
                                            rightSubtitleStyle={{position: 'absolute'}}
                                            leftAvatar={{source: {uri: l.avatar_url}}}
                                            title={l.name}
                                            subtitle={l.subtitle}
                                            bottomDivider
                                        />
                                    }
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}
export default Home
