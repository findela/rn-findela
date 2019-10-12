import React, {Component} from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';

class Suggested extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        )
    }
}

export default Suggested;
