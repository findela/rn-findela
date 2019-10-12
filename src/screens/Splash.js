import React, {Component} from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Icon, Button, ListItem } from 'react-native-elements';
import db  from '../config';

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
        this.getData();
    }

    getData = () => {
        db.on('value', snapshot => {
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
        db.push({
            angle: 90,
            id: 1,
            lat: 22.5520946,
            lng: 88.3415666
        });
        this.getData();
    };

    render() {
        return (
            <SafeAreaView style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#F64037'}}>
                <View style={{ top: 100,flex:1, alignItems:'center'}}>
                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        color='#F64037'
                        size={50}
                    />
                    <Text style={{color: '#fff', fontFamily: 'Lato', textAlign: 'center',fontSize: 50,fontWeight: 'bold'}}>Findela</Text>
                    <Text style={{color: '#fff', textAlign: 'center',fontSize: 20}}>A new way of roaming</Text>
                    <View style={{flex: 1, flexDirection: 'column', marginTop: 10, padding: 20}}>
                        <Button type='solid'
                                onPress={this.handleSubmit.bind(this)}
                                buttonStyle={{backgroundColor: '#fff',borderRadius: 5,padding: 15}}
                                titleStyle={{color: '#F64037'}}
                                containerStyle={{ flex:1, alignItems:'center'}}
                                title="Register to get started"/>
                        <Button type='outline'
                            icon={
                                <Icon name="arrow-right" size={20} type='font-awesome' color="white" iconStyle={{ paddingLeft: 10}}/>
                            }
                            iconRight
                            buttonStyle={{borderRadius: 5,padding: 15,borderColor: '#fff'}}
                            titleStyle={{color: '#FFFFFF'}}
                            containerStyle={{ flex:1, alignItems:'center'}}
                            title="Continue to Login"/>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
