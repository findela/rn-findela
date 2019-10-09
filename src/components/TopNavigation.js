import React, {Component} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import {Actions} from 'react-native-router-flux';


class TopNavigation extends Component {

    constructor(props) {
        super(props);
    }

    goToHome = () => {
        Actions.home();
    };
    goToAbout = () => {
        Actions.about();
    };

    render() {
        return (
            <SafeAreaView style={{
                flexDirection: 'row',
                backgroundColor: '#F64037',
                padding: 40,
                paddingBottom: 80,
            }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Text onPress={this.goToHome}
                          style={[{color: '#FFF', fontSize: 20},(this.props.currentScreen === 'home') ?{fontWeight: 'bold'} : '']}>
                        Messages
                    </Text>
                    {/*<Text onPress={this.goToAbout}*/}
                          {/*style={[{color: '#FFF', paddingLeft: 25, fontSize: 20},(this.props.currentScreen === 'about') ?{fontWeight: 'bold'} : '']}>*/}
                        {/*Groups*/}
                    {/*</Text>*/}
                    {/*<Text onPress={this.goToHome}*/}
                          {/*style={[{color: '#FFF', paddingLeft: 25, fontSize: 20},(this.props.currentScreen === 'activity') ?{fontWeight: 'bold'} : '']}>*/}
                        {/*Activity*/}
                    {/*</Text>*/}
                    {/*<Text onPress={this.goToAbout}*/}
                          {/*style={[{color: '#FFF', paddingLeft: 25, fontSize: 20},(this.props.currentScreen === 'account') ?{fontWeight: 'bold'} : '']}>*/}
                        {/*Account*/}
                    {/*</Text>*/}
                </ScrollView>
            </SafeAreaView>
        )
    }
};
export default TopNavigation
