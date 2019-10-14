import React, {Component} from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Icon, Button,Image } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.navigateAuth = this.navigateAuth.bind(this);
    }

    componentDidMount () {

    }

    navigateAuth = () => {
        Actions.auth();
    };

    render() {
        return (
            <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: '#F64037'}}>
                <View style={{ top: 100, flex:1, alignItems:'center'}}>
                    <Icon name='heartbeat' type='font-awesome' color='#fff' size={100}/>
                    <Image style={{ width: 250, height: 100 }} source={{uri: 'https://i.ibb.co/QkHyxyv/Page-1-1.png'}}/>
                    <Text style={{color: '#FCD0CE', textAlign: 'center',fontSize: 20}}>A new way of roaming</Text>
                    <Button
                        onPress={this.navigateAuth}
                        type='outline'
                        iconRight
                        buttonStyle={{marginTop: 200, borderRadius: 5,padding: 15,borderColor: '#fff'}}
                        icon={
                            <Icon name="arrow-right" size={20} type='font-awesome' color="white" iconStyle={{ paddingLeft: 10}}/>
                        }
                        titleStyle={{color: '#FFFFFF'}}
                        containerStyle={{ flex:1, alignItems:'center'}}
                        title="Let's get started"/>
                </View>
            </SafeAreaView>
        )
    }
}
