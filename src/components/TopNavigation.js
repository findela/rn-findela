import React, {Component} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Avatar, Icon, Badge } from 'react-native-elements';

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
                padding: 20,
                paddingBottom: 80,
            }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        (this.props.currentScreen.navigation === 'nav') &&
                        <View>
                            <Text style={{color: '#FCD0CE',marginBottom:5}}>Howdy Tamaghna, good afternoon!</Text>
                            <View style={{display:'flex',flexDirection: 'row'}}>
                                <Text onPress={this.goToHome} style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
                                    {this.props.currentScreen.text}
                                </Text>
                                <Text onPress={this.goToHome} style={{color: '#FFF', marginLeft: 25, fontSize: 20, fontWeight: 'bold'}}>
                                    Activity
                                </Text>
                                <Text onPress={this.goToHome} style={{color: '#FFF', marginLeft: 25, fontSize: 20, fontWeight: 'bold'}}>
                                    Groups
                                </Text>
                                <Text onPress={this.goToHome} style={{color: '#FFF', marginLeft: 25, fontSize: 20, fontWeight: 'bold'}}>
                                    Account
                                </Text>
                            </View>
                        </View>
                    }

                    {
                        (this.props.currentScreen.navigation === 'message') &&
                        <View style={{display:'flex',flexDirection: 'row', justifyContent: 'space-between', width: 310}}>
                            <View style={{display:'flex',flexDirection: 'row'}}>
                                <Avatar rounded
                                        size="medium"
                                        containerStyle={{marginRight: 15}}
                                        source={{uri: this.props.currentScreen.image}}
                                />
                                <Badge
                                    status="success"
                                    badgeStyle={{width: 12, height: 12, borderRadius: 50, }}
                                    containerStyle={{ position: 'absolute', top: 35, left: 35 }}
                                />
                                <View>
                                    <Text style={{color: '#FCD0CE'}}>Messages with</Text>
                                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
                                        {this.props.currentScreen.text}
                                    </Text>
                                </View>
                            </View>
                            <View style={{display:'flex',flexDirection: 'row'}}>
                                <Icon containerStyle={{
                                    borderRadius: 5, padding: 10
                                }}
                                      name='phone'
                                      type='font-awesome'
                                      color='#FFF'
                                      size={25}
                                      onPress={() => console.log('hello')} />
                                <Icon
                                    containerStyle={{
                                        marginLeft: 20,
                                        position: 'relative',
                                        top:10,
                                    }}
                                    name='ellipsis-v'
                                    type='font-awesome'
                                    color='#FCD0CE'
                                    size={25}
                                    onPress={() => console.log('hello')} />
                            </View>
                        </View>
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
};
export default TopNavigation
