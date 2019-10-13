import React, {Component} from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
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

    render() {
        return (
            <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: '#F64037'}}>
                <View style={{ top: 100, flex:1, alignItems:'center'}}>
                    <Icon name='heartbeat' type='font-awesome' color='#fff' size={100}/>
                </View>
            </SafeAreaView>
        )
    }
}
