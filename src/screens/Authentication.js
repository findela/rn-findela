import React, {Component} from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import {Icon, Button, Image, Input} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import { db }  from '../config';

export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            messages: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({loading: true});
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
        Actions.home();
        db.ref('/items').push({
            angle: 90,
            id: 1,
            lat: 22.5520946,
            lng: 88.3415666
        });
        this.getData();
    };

    render() {
        return (
            <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: '#F64037'}}>
                <View style={{ top: 150, flex:1, alignItems:'center'}}>
                    <Text style={{color: '#FFF', fontSize: 25, fontWeight: 'bold'}}>Verify and continue</Text>
                    <View style={{ width:320, marginTop: 40, marginBottom: 20 }}>
                        <Input
                            placeholderTextColor={'#FCD0CE'}
                            inputStyle={{color: '#fff'}}
                            inputContainerStyle={{borderColor: '#FCD0CE',borderWidth: 1}}
                            placeholder='Mobile Number'
                            leftIcon={
                                <Icon name="mobile" size={30} type='font-awesome' color="#FCD0CE" iconStyle={{ paddingRight: 10}}/>
                            }
                        />
                        <Input
                            placeholderTextColor={'#FCD0CE'}
                            inputContainerStyle={{borderColor: '#FCD0CE',borderWidth: 1, marginTop: 10}}
                            placeholder='Secured password'
                            leftIcon={
                                <Icon name="key" size={20} type='font-awesome' color="#FCD0CE" iconStyle={{ paddingRight: 10}}/>
                            }
                        />
                    </View>

                    <Button
                        onPress={this.handleSubmit}
                        type='solid'
                        buttonStyle={{borderRadius: 5, width: 300, padding: 15, backgroundColor: '#fff'}}
                        titleStyle={{color: '#F64037'}}
                        containerStyle={{ flex:1, alignItems:'center'}}
                        title="Let's get started"/>

                    <Button
                        type='clear'
                        titleStyle={{color: '#FCD0CE',fontSize: 15,textDecorationLine: 'underline'}}
                        containerStyle={{ flex:1, alignItems:'center'}}
                        title="Finding problem to verify?"/>
                </View>
            </SafeAreaView>
        )
    }
}
