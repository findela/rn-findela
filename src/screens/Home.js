import React, {Component} from 'react';
import { SafeAreaView, View } from 'react-native';
import TopNavigation from '../components/TopNavigation';
import {Actions} from 'react-native-router-flux';
import Suggested from '../components/Suggested';
import MessageList from '../components/MessageList';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            propsData : {
                navigation: "nav",
                text : 'Messages'
            }
        };
    }

    render() {
        return (
            <View>
                <TopNavigation currentScreen={this.state.propsData}/>
                <Suggested/>
                <SafeAreaView>
                    <MessageList/>
                </SafeAreaView>
            </View>
        )
    }
}
export default Home
