import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/components/Home.js';
import Message from './src/components/Message.js';

const Routes = () => (
    <Router>
        <Scene key="root" duration={0} hideNavBar={true}>
            <Scene key = "home" component = {Home} initial = {true} />
            <Scene key = "message" component = {Message}/>
        </Scene>
    </Router>
)
export default Routes
