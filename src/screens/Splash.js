import React, {Component} from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Icon, Button,Image } from 'react-native-elements';
import { db }  from '../config';
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            messages: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.setState({ loading: true });
        //this.getData();
    }

    getData = () => {
        db.ref('/items').on('value', snapshot => {
            const messageObject = snapshot.val();
            if (messageObject) {
                let data = snapshot.val();
                let items = Object.values(data);
                this.setState({ loading: false, messages: items}, () => {
                    console.log(items);
                });
            } else {
                this.setState({ messages: null, loading: false });
            }
        });
    };

    handleSubmit = () => {
        db.ref('/items').push({
            angle: 90,
            id: 1,
            lat: 22.5520946,
            lng: 88.3415666
        });
        this.getData();
    };

    navigateAuth = () => {
        Actions.auth();
    }

    render() {
        return (
            <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: '#F64037'}}>
                <View style={{ top: 100,flex:1, alignItems:'center'}}>
                    <Image style={{ width: 250, height: 150 }} source={{uri: 'https://i.ibb.co/QkHyxyv/Page-1-1.png'}}/>
                    <Text style={{color: '#FCD0CE', textAlign: 'center',fontSize: 20}}>A new way of roaming</Text>
                    <Button
                        onPress={this.navigateAuth}
                        type='outline'
                        iconRight
                        buttonStyle={{marginTop:150, borderRadius: 5,padding: 15,borderColor: '#fff'}}
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
