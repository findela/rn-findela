import React, {Component} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';
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
];

class MessageList extends Component {

    constructor(props) {
        super(props);
        this.getMessageDetails = this.getMessageDetails.bind(this);
    }

    getMessageDetails = (val,url) => {
        Actions.message({ text: val,image:url })
    };

    render() {
        return (
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
                                            [(l.messageFlag) ? {backgroundColor: '#FEEDEC'} : '']
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
                                        containerStyle={[(l.messageFlag) ? {backgroundColor: '#FEEDEC'} : '']}
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
        )
    }
}

export default MessageList;
