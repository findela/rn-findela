import React, { Component } from 'react';
import { AppRegistry,StatusBar } from 'react-native';
import Routes from './Routes.js'

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        StatusBar.setBarStyle( 'light-content',true)
        StatusBar.setBackgroundColor("#F64037")
    }
    render() {
        return (

            <Routes />
        )
    }
}
export default App
AppRegistry.registerComponent('reactTutorialApp', () => App)
