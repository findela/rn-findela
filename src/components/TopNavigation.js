import React, {Component} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Avatar } from 'react-native-elements';

class TopNavigation extends Component {

    constructor(props) {
        super(props);
    }

    goToHome = () => {
        Actions.home();
    };

    render() {
        return (
            <SafeAreaView style={{
                flexDirection: 'row',
                backgroundColor: '#F64037',
                padding: 30,
                paddingBottom: 80,
            }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        (this.props.currentScreen.navigation === 'nav') &&
                        <View>
                            <Text style={{color: '#FCD0CE'}}>Howdy Tamaghna, good afternoon!</Text>
                            <Text onPress={this.goToHome} style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
                                {this.props.currentScreen.text}
                            </Text>
                        </View>
                    }
                    {
                        (this.props.currentScreen.navigation === 'message') &&
                        <View style={{display:'flex',flexDirection: 'row'}}>
                            <Avatar rounded
                                    size="medium"
                                    badge={{}}
                                    containerStyle={{marginRight: 15}}
                                    source={{uri: this.props.currentScreen.image}}
                            />
                            <View>
                                <Text style={{color: '#FFF'}}>Messages with</Text>
                                <Text style={{color: '#FFF', fontSize: 25, fontWeight: 'bold'}}>
                                    {this.props.currentScreen.text}
                                </Text>
                            </View>
                        </View>
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
};
export default TopNavigation
